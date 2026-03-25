var truong_template = {
    title: "{TenTruong}",
    content: "Năm thành lập: <b>{NamThanhLap}</b><br>Ngành đào tạo: <b>{NganhDaoTao}</b><br>Số lượng sinh viên: <b>{SoSinhVien}</b>"
};

var dai_hoc_data = {
    "points": [
        {
            type: "point",
            longitude: 106.80335714985944,
            latitude: 10.86980521540401,
            TenTruong: "ĐH Công nghệ Thông tin (UIT)",
            NamThanhLap: "2006",
            NganhDaoTao: "KTPM, KHMT, ATTT, HTTT, MMT&TT",
            SoSinhVien: "Khoảng 8.000",
            symbol: {
                type: "picture-marker",
                url: "./icons/map-pin.png",
                width: "30px",
                height: "30px",
                yoffset: "15px"
            },
            popupTemplate: truong_template
        },

        {
            type: "point",
            longitude: 106.80557415683101,
            latitude: 10.880530175395347,
            TenTruong: "bách khoa",
            NamThanhLap: "2006",
            NganhDaoTao: "KTPM, KHMT, ATTT, HTTT, MMT&TT",
            SoSinhVien: "Khoảng 8.000",
            symbol: {
                type: "picture-marker",
                url: "./icons/map-pin.png",
                width: "30px",
                height: "30px",
                yoffset: "15px"
            },
            popupTemplate: truong_template
        }
        // Bạn làm trường ĐH sẽ copy/paste thêm xuống dưới đây
    ]
};