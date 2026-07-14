// เรียกใช้งาน Module http
const http = require('http');

// กำหนด Port
const port = process.env.PORT || 3000;

// สร้าง Web Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My First Node.js Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Tahoma,sans-serif;
}

body{
    background:linear-gradient(135deg,#4facfe,#00f2fe);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.card{
    width:700px;
    max-width:90%;
    background:#fff;
    border-radius:20px;
    padding:40px;
    box-shadow:0 20px 40px rgba(0,0,0,.2);
    text-align:center;
    animation:fadeIn 1s;
}

.avatar{
    width:120px;
    height:120px;
    margin:auto;
    border-radius:50%;
    background:linear-gradient(45deg,#667eea,#764ba2);
    color:white;
    font-size:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
}

h1{
    color:#333;
    margin-bottom:10px;
}

.subtitle{
    color:#666;
    margin-bottom:30px;
}

.info{
    text-align:left;
    margin:25px 0;
}

.info table{
    width:100%;
    border-collapse:collapse;
}

.info td{
    padding:12px;
    border-bottom:1px solid #eee;
    font-size:18px;
}

.info td:first-child{
    font-weight:bold;
    color:#0d6efd;
    width:180px;
}

.success{
    margin-top:25px;
    background:#d1f7dd;
    color:#146c43;
    padding:15px;
    border-radius:10px;
    font-size:18px;
    font-weight:bold;
}

.footer{
    margin-top:30px;
    color:#777;
    font-size:15px;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
</style>

</head>

<body>

<div class="card">

<div class="avatar">
💻
</div>

<h1>🌐 My First Node.js Web Server</h1>

<p class="subtitle">
ยินดีต้อนรับเข้าสู่ Web Server บน Railway
</p>

<div class="info">

<table>

<tr>
<td>👩 ชื่อ - สกุล</td>
<td>นางสาววรินทร พนาวัน</td>
</tr>

<tr>
<td>😊 ชื่อเล่น</td>
<td>ฝ้าย</td>
</tr>

<tr>
<td>🎓 ระดับชั้น</td>
<td>HIT.1/1 V (B)</td>
</tr>

<tr>
<td>💼 สาขาวิชา</td>
<td>เทคโนโลยีสารสนเทศ (Information Technology)</td>
</tr>

<tr>
<td>🆔 รหัสนักศึกษา</td>
<td>69319010024</td>
</tr>

<tr>
<td>⚙️ พัฒนาโดย</td>
<td>Node.js + Railway</td>
</tr>

</table>

</div>

<div class="success">
✅ เครื่องแม่ข่ายกำลังทำงานปกติ<br>
พร้อมให้บริการผู้ใช้งานแล้ว
</div>

<div class="footer">
🚀 Web Server Project<br>
วิทยาลัยเทคโนโลยีชลบุรี
</div>

</div>

</body>
</html>
`);

});

// เปิดใช้งาน Server
server.listen(port, () => {
    console.log(`🚀 Server is running on Port : ${port}`);
});
