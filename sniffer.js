// Define main function (script entry)

function main(config, profileName) {
    config.sniffer = {
        enable: true,
        sniff: {
            HTTP: { ports: [80, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088] },
            TLS: { ports: [443, 8443] },
            QUIC: { ports: [443, 8443] }
        }
    };
    return config;
}
