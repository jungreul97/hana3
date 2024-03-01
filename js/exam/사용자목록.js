const users = [
    { id: 1, name: '홍길동', tel: '01088889991', addr: '서울' },
    { id: 2, name: '김길동', tel: '01088889992', addr: '부산' },
    { id: 3, name: '이길동', tel: '01088889993', addr: '서울' },
    { id: 4, name: '박길동', tel: '01088889994', addr: '서울' },
  ];
  
  const tableBody = document.querySelector('#userTable tbody');
  
  users.forEach(user => {
    const row = document.createElement('tr');
    const user_phone_num = user.tel.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user_phone_num}</td>
      <td>${user.addr}</td>
      <td><button class="deleteBtn">삭제</button></td>
    `;
    tableBody.appendChild(row);
  });
  
  tableBody.addEventListener('click', event => {
    if (event.target.matches('.deleteBtn')) {
      if (confirm('정말로 삭제하시겠습니까?')) {
        const rowToDelete = event.target.parentNode.parentNode;
        tableBody.removeChild(rowToDelete);
      }
    }
  });
  