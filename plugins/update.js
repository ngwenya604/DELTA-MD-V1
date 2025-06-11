const fs = require("fs");
const path = require("path");
const axios = require("axios");
const AdmZip = require("adm-zip");

gmd({
    pattern: "update",
    alias: ["updatenow", "botupdate"],
    react: "✅",
    desc: "Update bot files from GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (Gifted, mek, m, { from, reply, isCreator }) => {
    if (!isCreator) return reply("❌ Only the bot owner can perform this action.");

    try {
        await reply("⏳ Checking for updates...");

        const zipUrl = "https://github.com/Frontier-Lord200/DELTA-MD-V1/archive/refs/heads/main.zip";
        const zipPath = path.join(__dirname, "update.zip");
        const extractPath = path.join(__dirname, "update");
        const sourceFolder = path.join(extractPath, "DELTA-MD-V1-main");
        const targetFolder = path.join(__dirname, "..");

        // Download latest ZIP
        const { data: zipData } = await axios.get(zipUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(zipPath, zipData);

        // Extract ZIP
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath, true);
        await reply("📦 Extracted latest update.");

        // Copy files, preserving configs
        copyFolderSync(sourceFolder, targetFolder);

        // Cleanup
        fs.unlinkSync(zipPath);
        fs.rmSync(extractPath, { recursive: true, force: true });

        await Gifted.sendMessage(from, { text: '*✅ Update completed. Restarting bot...*' }, { quoted: mek });
        process.exit(0);

    } catch (err) {
        console.error(err);
        reply(`❌ Update failed:\n${err.message}`);
    }
});

function copyFolderSync(source, target) {
    if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });
    const items = fs.readdirSync(source);

    for (const item of items) {
        const srcPath = path.join(source, item);
        const destPath = path.join(target, item);

        if (["set.js", ".env", "app.json"].includes(item)) {
            console.log(`Skipping ${item}`);
            continue;
        }

        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFolderSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}