function Calendar(year, month) {
    const date = new Date(year, month - 1, 1);
    const firstDay = date.getDay();
    const lastDate = new Date(year, month, 0).getDate();
  
    const calendar = [];
    let row = [];
  
    for (let i = 0; i < firstDay; i++) {
      row.push(" ".padStart(4, " "));
    }
  
    for (let day = 1; day <= lastDate; day++) {
      row.push(String(day).padStart(4, " "));
  
      if ((firstDay + day) % 7 === 0) {
        calendar.push(row);
        row = [];
      }
    }
  
    if (row.length > 0) {
      calendar.push(row);
    }
  
    console.log(`<${year}년 ${month}월>`);
    console.log("  일   월  화  수  목  금  토");
  
    for (let i = 0; i < calendar.length; i++) {
      console.log(calendar[i].join(""));
    }
  }
  const year = 2024;
  const month = 2;
  Calendar(year, month);
    
  