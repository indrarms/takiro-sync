export const getLevel = (value, min, max) => {
    if (value < min) return 1;
    if (value > max) return 3;
    return 2;
};

export const getStatusLabel = (level) => ({
    1: "Rendah",
    2: "Normal",
    3: "Tinggi"
}[level]);

export const getStatusColor = (level) => ({
    1: "#FD9A00",
    2: "#00BBA8",
    3: "#FB2C36"
}[level]);
