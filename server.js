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
    font-family:'Segoe UI',Tahoma,'Helvetica Neue',sans-serif;
}

:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --accent: #00f2fe;
    --dark-bg: #0f1419;
    --light-bg: #ffffff;
}

body{
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00f2fe 100%);
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 800px;
    max-width: 100%;
}

.card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 50px 40px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.5) inset;
    text-align: center;
    animation: slideUp 0.8s ease-out;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.avatar {
    width: 150px;
    height: 150px;
    margin: 0 auto 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-size: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
    animation: float 3s ease-in-out infinite;
    border: 4px solid white;
}

h1 {
    color: #333;
    font-size: 32px;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    color: #666;
    font-size: 18px;
    margin-bottom: 35px;
    font-weight: 500;
}

.status-badge {
    display: inline-block;
    background: linear-gradient(135deg, #00f2fe, #4facfe);
    color: white;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 25px;
    animation: pulse 2s ease-in-out infinite;
}

.info {
    text-align: left;
    margin: 30px 0;
    background: linear-gradient(to bottom, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
    padding: 25px;
    border-radius: 15px;
    border-left: 4px solid #667eea;
}

.info-row {
    display: grid;
    grid-template-columns: 200px 1fr;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    align-items: center;
    gap: 20px;
}

.info-row:last-child {
    border-bottom: none;
}

.info-label {
    font-weight: 600;
    color: #667eea;
    font-size: 16px;
}

.info-value {
    color: #333;
    font-size: 16px;
}

.success {
    margin-top: 30px;
    background: linear-gradient(135deg, rgba(13, 110, 253, 0.1), rgba(13, 110, 253, 0.05));
    color: #0d6efd;
    padding: 20px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid #0d6efd;
    animation: slideIn 0.8s ease-out 0.2s both;
}

.footer {
    margin-top: 30px;
    color: #999;
    font-size: 14px;
    line-height: 1.6;
}

.footer a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.footer a:hover {
    color: #764ba2;
}

.tech-stack {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
    flex-wrap: wrap;
}

.tech-badge {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-badge:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(0, 242, 254, 0.7);
    }
    50% {
        opacity: 0.95;
        box-shadow: 0 0 0 10px rgba(0, 242, 254, 0);
    }
}

@media (max-width: 600px) {
    .card {
        padding: 30px 20px;
    }
    
    h1 {
        font-size: 24px;
    }
    
    .avatar {
        width: 120px;
        height: 120px;
        font-size: 50px;
    }
    
    .info-row {
        grid-template-columns: 1fr;
        gap: 8px;
    }
    
    .info-label {
        font-size: 14px;
    }
    
    .info-value {
        font-size: 14px;
    }
}

</style>

</head>

<body>

<div class="container">
    <div class="card">

        <div class="avatar">💻</div>

        <h1>🌐 My First Node.js Web Server</h1>

        <p class="subtitle">ยินดีต้อนรับเข้าสู่ Web Server บน Railway</p>

        <div class="status-badge">
            🟢 Server Active
        </div>

        <div class="info">
            <div class="info-row">
                <div class="info-label">👩 ชื่อ - สกุล</div>
                <div class="info-value">นางสาววรินทร พนาวัน</div>
            </div>

            <div class="info-row">
                <div class="info-label">😊 ชื่อเล่น</div>
                <div class="info-value">ฝ้าย</div>
            </div>

            <div class="info-row">
                <div class="info-label">🎓 ระดับชั้น</div>
                <div class="info-value">HIT.1/1 V (B)</div>
            </div>

            <div class="info-row">
                <div class="info-label">💼 สาขาวิชา</div>
                <div class="info-value">เทคโนโลยีสารสนเทศ (IT)</div>
            </div>

            <div class="info-row">
                <div class="info-label">🆔 รหัสนักศึกษา</div>
                <div class="info-value">69319010024</div>
            </div>

            <div class="info-row">
                <div class="info-label">⚙️ พัฒนาโดย</div>
                <div class="info-value">Node.js + Railway</div>
            </div>
        </div>

        <div class="success">
            ✅ เครื่องแม่ข่ายกำลังทำงานปกติ<br>
            พร้อมให้บริการผู้ใช้งานแล้ว
        </div>

        <div class="tech-stack">
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Express</span>
            <span class="tech-badge">Railway</span>
        </div>

        <div class="footer">
            🚀 Web Server Project<br>
            วิทยาลัยเทคโนโลยีชลบุรี<br>
            © 2024 | Developed with ❤️ by วรินทร พนาวัน
        </div>

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
