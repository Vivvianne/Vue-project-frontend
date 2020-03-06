module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8085",
                ws: true,
                changeOrigin: true
            }
        },
        allowedHosts: ["vststudios.ddns.net", "localhost", "0.0.0.0"]
    }
    // outputDir: "../../gcode/src/vststudios.com/tsv_server/docker/nginx/dist"
};