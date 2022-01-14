/**
 * Loader proggress calculotion
 * @param {*} input
 * @param {*} current
 * @returns
 */
function timers(input, current) {
    return (100 * current) / input;
}

function checkResult(marks) {
    if (marks >= 0 && marks < 33) {
        return {
            grade: "F",
            Status: " You are failed",
            bg : 'danger'
        };
    } else if (marks >= 33 && marks < 40) {
        return {
            grade: "D",
            Status: " You are passed",
            bg : 'success'
        };
    } else if (marks >= 40 && marks < 50) {
        return {
            grade: "C",
            Status: " You are passed",
            bg : 'success'
        };
    } else if (marks >= 50 && marks < 60) {
        return {
            grade: "B",
            Status: " You are passed",
            bg : 'success'
        };
    } else if (marks >= 60 && marks < 70) {
        return {
            grade: "A",
            Status: " You are passed",
            bg : 'success'
        };
    } else if (marks >= 70 && marks < 80) {
        return {
            grade: "A-",
            Status: " You are passed",
            bg : 'success'
        };
    } else if (marks >= 80 && marks <= 100) {
        return {
            grade: "A+",
            Status: " You are passed",
            bg : 'success'
        };
    } else if (marks > 100) {
        return {
            grade: "",
            Status: "Input Valid marks",
            bg : 'danger'
        };
    }
}
