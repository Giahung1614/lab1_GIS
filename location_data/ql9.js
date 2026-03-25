var ql_data = {
    type: "polyline",
    paths: [
        //nhập tọa độ

    ],
    Name: "Tên tuyến đường",
    Loai: "Quốc lộ / Cao tốc",
    ChieuDai: "Cập nhật sau",
    symbol: {
        type: "simple-line",
        color: [0, 0, 0, 0.8],
        width: "4px",
        style: "solid"
    },
    popupTemplate: {
        title: "Tuyến đường: {Name}",
        content: "Loại đường: <b>{Loai}</b><br>Chiều dài: <b>{ChieuDai}</b> km."
    }
};