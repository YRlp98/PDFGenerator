import { jsPDF } from 'https://cdn.skypack.dev/jspdf@2.5.1';

const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: 'a4' });
doc.addFont('../assets/fonts/arial.ttf', 'arial_normal', 'normal');
doc.addFont('../assets/fonts/arial_bold.ttf', 'arial_bold', 'bold');

// Gaps
const gap = 0.7;
const lineGap = 8;

// Colors
const black_color = "#000000";
const white_color = "#FFFFFF";
const green_color = "#3CCB83";
const red_color = "#EF5C5C";
const purple_color = "#8F39A9";
const light_purple_color = "#F6E8FA";
const lighter_purple_color = "#FDF4FF";
const gray_color = "#E6E9EF";
const dark_gray_color = "#344563";

// Data
const reportInfo = {
    "reportGeneratedBy": "Yousef Roshandel",
    "reportGenerateDate": "10/05/2022 - 12:30",
    "projectDetails": [
        "Youse's Project #23",
        "C2508-156",
        "XXXXX",
        "Graham construction",
        "50mph",
        "HWM_TM_C2508-156_005"
    ]
};
const tableData = [
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
    [
        "01/03/2024",
        "41567",
        "4567",
        "689",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis and nostrud.",
    ],
];

// Helper function to set font and text color
const textStyle = (font, style, color) => {
    doc.setFont(font, style);
    doc.setTextColor(color);
};

// Helper function to add rectangle with border-radius, color, height, and padding
const addRoundedRect = (x, y, width, height, borderRadius, fillColor, borderColor, borderWidth) => {
    doc.setFillColor(fillColor);
    doc.setDrawColor(borderColor);
    doc.setLineWidth(borderWidth);
    doc.roundedRect(x, y, width, height, borderRadius, borderRadius, 'FD');
};

// Helper function to add text
const addText = (text, x, y) => {
    doc.text(text, x, y);
};

// Helper function to truncate text based on available width
const truncateText = (text, maxWidth, fontSize) => {
    let truncatedText = text;
    const textWidth = doc.getTextDimensions(text).w * fontSize / doc.internal.scaleFactor;

    if (textWidth > maxWidth) {
        const ellipsisWidth = doc.getTextDimensions('...').w * fontSize / doc.internal.scaleFactor;
        const maxChars = Math.floor((maxWidth - ellipsisWidth) / (textWidth / text.length));
        truncatedText = text.substring(0, maxChars) + '...';
    }

    return truncatedText;
};

const headerSection = () => {
    doc.setFontSize(9);

    // Add content to the header section
    const headerText = "Header Section Text";
    const headerHeight = doc.getTextDimensions(headerText).h; // Calculate header height

    const rectangleHeight = 45;
    const rectangleWidth = doc.internal.pageSize.width - 20;
    const rectangleHalfWidth = (doc.internal.pageSize.width - 20) / 2.4;

    addRoundedRect(10, headerHeight, rectangleWidth, rectangleHeight, 2, white_color, purple_color, 0.5);

    // Header Section contents
    const padding = 5;
    const contentX = 7 + padding;
    const contentY = headerHeight + padding + 3;

    // Logo
    const logoWidth = 30;
    const logoHeight = 10;
    const logoX = contentX;
    const logoY = headerHeight + 3;
    doc.addImage('../assets/images/syte-logo.png', 'PNG', logoX, logoY, logoWidth, logoHeight);

    // General info
    // Title
    addRoundedRect(contentX, headerHeight + lineGap + 8, 102, 6, 1, purple_color, purple_color, 0.5);
    textStyle("arial_bold", "bold", white_color);
    addText("Traffic Sign Sensor Status Monthly Report", contentX + 2, headerHeight + lineGap + 8 + 4);

    // Generated by
    addRoundedRect(contentX, headerHeight + lineGap + 15, 102, 6, 1, light_purple_color, light_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Report Generated by:", contentX + 2, headerHeight + lineGap + 15 + 4);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.reportGeneratedBy, contentX + 45, headerHeight + lineGap + 15 + 4);

    // Generated date
    addRoundedRect(contentX, headerHeight + lineGap + 22, 102, 6, 1, lighter_purple_color, lighter_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Report Generated Date:", contentX + 2, headerHeight + lineGap + 22 + 4);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.reportGenerateDate, contentX + 45, headerHeight + lineGap + 22 + 4);

    // From to time
    addRoundedRect(contentX, headerHeight + lineGap + 29, 102, 6, 1, light_purple_color, light_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("From:", contentX + 2, headerHeight + lineGap + 29 + 4);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.reportGenerateDate, contentX + 13, headerHeight + lineGap + 29 + 4);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("To:", contentX + 43, headerHeight + lineGap + 29 + 4);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.reportGenerateDate, contentX + 50, headerHeight + lineGap + 29 + 4);

    // Report Details
    // Project Name
    addRoundedRect(rectangleHalfWidth, headerHeight + lineGap - 6, 170, 6, 1, lighter_purple_color, lighter_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Project Name:", rectangleHalfWidth + 2, headerHeight + lineGap - 2);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.projectDetails[0], rectangleHalfWidth + 90, headerHeight + lineGap - 2);

    // Project Number
    addRoundedRect(rectangleHalfWidth, headerHeight + lineGap + 1, 170, 6, 1, light_purple_color, light_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Project Number:", rectangleHalfWidth + 2, headerHeight + lineGap + 5);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.projectDetails[1], rectangleHalfWidth + 90, headerHeight + lineGap + 5);

    // Client Project Number
    addRoundedRect(rectangleHalfWidth, headerHeight + lineGap + 8, 170, 6, 1, lighter_purple_color, lighter_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Client Project Number:", rectangleHalfWidth + 2, headerHeight + lineGap + 12);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.projectDetails[2], rectangleHalfWidth + 90, headerHeight + lineGap + 12);

    // Customer / Client
    addRoundedRect(rectangleHalfWidth, headerHeight + lineGap + 15, 170, 6, 1, light_purple_color, light_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Customer / Client:", rectangleHalfWidth + 2, headerHeight + lineGap + 19);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.projectDetails[3], rectangleHalfWidth + 90, headerHeight + lineGap + 19);

    // Traffic Management Type
    addRoundedRect(rectangleHalfWidth, headerHeight + lineGap + 22, 170, 6, 1, lighter_purple_color, lighter_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Traffic Management Type:", rectangleHalfWidth + 2, headerHeight + lineGap + 26);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.projectDetails[4], rectangleHalfWidth + 90, headerHeight + lineGap + 26);

    // Checked in Accordance with Drawing Number(s)
    addRoundedRect(rectangleHalfWidth, headerHeight + lineGap + 29, 170, 6, 1, light_purple_color, light_purple_color, 0.5);
    textStyle("arial_bold", "bold", dark_gray_color);
    addText("Checked in Accordance with Drawing Number(s):", rectangleHalfWidth + 2, headerHeight + lineGap + 33);
    textStyle("arial_normal", "normal", dark_gray_color);
    addText(reportInfo.projectDetails[5], rectangleHalfWidth + 90, headerHeight + lineGap + 33);

    return headerHeight + rectangleHeight;
};

const drawTableHeaders = (headerHeight) => {
    textStyle("arial_bold", "bold", purple_color);

    addRoundedRect(10, headerHeight + 4, 25, 14, 1, light_purple_color, light_purple_color, 0.5);
    addText("Date", 19, headerHeight + 12);

    addRoundedRect(37, headerHeight + 4, 250, 6, 1, light_purple_color, light_purple_color, 0.5);
    addText("Time and Status of Check", 140, headerHeight + 8);

    textStyle("arial_bold", "bold", white_color);
    addRoundedRect(37, headerHeight + 12, 15, 6, 1, purple_color, purple_color, 0.5);
    addText("Active", 37 + 2.5, headerHeight + 12 + 4);

    textStyle("arial_bold", "bold", white_color);
    addRoundedRect(53.5, headerHeight + 12, 15, 6, 1, purple_color, purple_color, 0.5);
    addText("Inactive", 53.5 + 1.5, headerHeight + 12 + 4);

    textStyle("arial_bold", "bold", white_color);
    addRoundedRect(70, headerHeight + 12, 15, 6, 1, purple_color, purple_color, 0.5);
    addText("Verified", 70 + 1.5, headerHeight + 12 + 4);

    textStyle("arial_bold", "bold", white_color);
    addRoundedRect(86.5, headerHeight + 12, 200, 6, 1, purple_color, purple_color, 0.5);
    addText("Details", 86.5 + 1.5, headerHeight + 12 + 4);
};

const drawTableRows = (rowHeight, maxRowsPerPage, currentRow, currentPage, headerHeight, tableData, subCellWidth, spaceBetweenCells) => {
    const headerWidths = [25, 15, 15, 15, 200];
    let startY;

    if (currentPage === 1) {
        // For the first page, consider the header height
        startY = headerHeight + 20;
    } else {
        // For subsequent pages, calculate startY based on the number of rows already drawn on previous pages
        startY = 22;
    }

    while (currentRow < tableData.length && currentRow < maxRowsPerPage * currentPage) {
        const row = tableData[currentRow];
        let startX = 10;

        row.forEach((cellData, cellIndex) => {
            const cellWidth = headerWidths[cellIndex];
            const cellHeight = rowHeight;

            // Calculate the position of the cell
            let cellX = startX;
            if (cellIndex === 2) {
                cellX -= 0.5;
            } else if (cellIndex === 3) {
                cellX -= 1;
            }
            else if (cellIndex === row.length - 1) {
                cellX -= 1;
            }
            const cellY = startY + (currentRow % maxRowsPerPage) * (rowHeight + 2);

            addRoundedRect(cellX, cellY, cellWidth, cellHeight, 1, gray_color, gray_color, 0.5);

            // Truncate the cell data based on the cell width
            let truncatedCellData = cellData;
            if (cellIndex === row.length - 1) {
                // For the last cell in the row, truncate text with adjusted width
                truncatedCellData = truncateText(cellData, cellWidth - 25, 2.5);
            } else {
                // For other cells, truncate text based on the full width of the cell
                truncatedCellData = truncateText(cellData, cellWidth, 2.5);
            }

            // Calculate the x-coordinate to center the text within the cell
            const textX = cellX + (cellWidth - doc.getTextDimensions(truncatedCellData).w) / 2;

            // Calculate the y-coordinate to center the text vertically within the cell
            const textY = cellY + cellHeight - 2;

            // Set the text color
            textStyle("arial_normal", "normal", black_color);

            // For the last cell in the row, align the text to the left
            if (cellIndex === row.length - 1) {
                addText(truncatedCellData, cellX + 2, textY); // Adjust the x-coordinate for left alignment
            } else {
                addText(truncatedCellData, textX, textY);
            }

            // Update startX for the next cell
            startX += cellWidth + spaceBetweenCells;
        });

        currentRow++;
    }
};

const bodySection = (headerHeight) => {
    doc.setFontSize(8);
    const subCellWidth = 15.4;
    const spaceBetweenCells = 2;

    drawTableHeaders(headerHeight);

    textStyle("arial_normal", "normal", black_color);
    const rowHeight = 6;
    const maxRowsPerPage = 16;
    let currentRow = 0;
    let currentPage = 1;

    const totalPages = Math.ceil(tableData.length / maxRowsPerPage);

    // Draw table rows on each page
    while (currentPage <= totalPages) {
        // Add a new page if there are more rows to be drawn
        if (currentPage > 1) {
            doc.addPage({ orientation: "landscape", unit: "mm", format: 'a4' });

            drawTableHeaders(2);
        }

        drawTableRows(rowHeight, maxRowsPerPage, currentRow, currentPage, headerHeight, tableData, subCellWidth, spaceBetweenCells);

        // Move to the next page
        currentPage++;
    }
};

const generatePDF = () => {
    const headerHeight = headerSection();
    bodySection(headerHeight);

    // Save the PDF or get the data URI
    const pdfDataUri = doc.output("datauristring");

    return pdfDataUri;
};

export default generatePDF;