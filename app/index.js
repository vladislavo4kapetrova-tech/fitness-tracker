<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MuscleBalance & Fitness Tracker</title>
    <style>
        :root {
            --bg-color: #f0f4f8;
            --card-bg: #ffffff;
            --text-main: #2d3748;
            --text-muted: #718096;
            --primary: #AEC6CF; /* Мягкий голубой */
            --primary-dark: #8ab0bc;
            --accent: #F8C8DC;  /* Бледно-розовый */
            --accent-dark: #e8a5bc;
            --success: #68D391;
            --danger: #FC8181;
            --radius: 16px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            padding: 20px;
            display: flex;
            justify-content: center;
        }

        .container {
            width: 100%;
            max-width: 600px;
        }

        header {
            text-align: center;
            margin-bottom: 24px;
        }

        header h1 {
            font-size: 26px;
            color: var(--text-main);
            margin-bottom: 4px;
        }

        header p {
            font-size: 14px;
            color: var(--text-muted);
        }

        .card {
            background: var(--card-bg);
            border-radius: var(--radius);
            padding: 20px;
            margin-bottom: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .card h2 {
            font-size: 18px;
            margin-bottom: 12px;
            color: var(--text-main);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Шаги */
        .steps-display {
            font-size: 32px;
            font-weight: bold;
            color: var(--primary-dark);
            text-align: center;
            margin: 10px 0;
        }

        /* Анатомическая карта / Свечение мышц */
        .body-map-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 10px;
        }

        .muscle-item {
            background: #f7fafc;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 10px;
            text-align: center;
            transition: all 0.3s;
        }

        .muscle-item.worked {
            background: rgba(174, 198, 207, 0.25);
            border-color: var(--primary);
            box-shadow: 0 0 10px rgba(174, 198, 207, 0.5);
        }

        .muscle-name {
            font-size: 14px;
            font-weight: 600;
        }

        .muscle-status {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .muscle-item.worked .muscle-status {
            color: #2b6cb0;
            font-weight: bold;
        }

        /* Кнопки */
        .btn {
            background: var(--primary);
            color: var(--text-main);
            border: none;
            border-radius: 10px;
            padding: 12px;
            font-size: 15px;
            font-weight: 600;
            width: 100%;
            cursor: pointer;
            transition: background 0.2s;
            margin-top: 10px;
        }

        .btn:hover {
            background: var(--primary-dark);
            color: white;
        }

        .btn-accent {
            background: var(--accent);
        }
        .btn-accent:hover {
            background: var(--accent-dark);
            color: white;
        }

        /* Зарядка */
        .routine-list {
            list-style: none;
        }

        .routine-item {
            display: flex;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #edf2f7;
            font-size: 15px;
        }

        .routine-item:last-child {
            border-bottom: none;
        }

        .routine-item input {
            margin-right: 12px;
            width: 18px;
            height: 18px;
            accent-color: var(--primary-dark);
        }

        .completed-text {
            text-decoration: line-through;
            color: var(--text-muted);
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>MuscleBalance 🌸</h1>
            <p>Умный фитнес-планировщик по нормам ВОЗ</p>
        </header>

        {/* 1. Шаги */}
        <div class="card">
            <h2>🚶‍♀️ Шаги за сегодня</h2>
            <div class="steps-display" id="stepsCount">0 / 10,000</div>
            <button class="btn" onclick="addSteps()">+ 1,000 шагов</button>
        </div>

        {/* 2. Утренняя зарядка */}
        <div class="card">
            <h2>☀️ Утренняя зарядка</h2>
            <ul class="routine-list" id="routineList">
                <li class="routine-item">
                    <input type="checkbox" onchange="toggleRoutine(this)"> Суставная разминка (5 мин)
                </li>
                <li class="routine-item">
                    <input type="checkbox" onchange="toggleRoutine(this)"> Мягкая растяжка / Пилатес (10 мин)
                </li>
                <li class="routine-item">
                    <input type="checkbox" onchange="toggleRoutine(this)"> Дыхательные практики (3 мин)
                </li>
            </ul>
        </div>

        {/* 3. Каррта мышц (ВОЗ: нормы подходов и статус) */}
        <div class="card">
            <h2>🧬 Баланс мышц (Нормы ВОЗ)</h2>
            <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 10px;">Цель: 10–20 подходов на группу в неделю</p>
            
            <div class="body-map-grid">
                <div class="muscle-item worked" id="m-legs">
                    <div class="muscle-name">🦵 Ноги / Ягодицы</div>
                    <div class="muscle-status">14 / 16 подходов (Норма)</div>
                </div>
                <div class="muscle-item worked" id="m-back">
                    <div class="muscle-name">🔙 Спина</div>
                    <div class="muscle-status">12 / 12 подходов (Норма)</div>
                </div>
                <div class="muscle-item" id="m-chest">
                    <div class="muscle-name">胸 Грудь</div>
                    <div class="muscle-status">4 / 10 подходов (Нужен упор!)</div>
                </div>
                <div class="muscle-item" id="m-arms">
                    <div class="muscle-name">💪 Руки / Плечи</div>
                    <div class="muscle-status">6 / 12 подходов (Нужен упор!)</div>
                </div>
            </div>
            
            <button class="btn btn-accent" onclick="simulateWorkout()">+ Добавить силовую тренировку</button>
        </div>

    </div>

    <script>
        // Работа шагов
        let steps = localStorage.getItem('mb_steps') ? parseInt(localStorage.getItem('mb_steps')) : 3400;
        updateStepsUI();

        function addSteps() {
            steps += 1000;
            localStorage.setItem('mb_steps', steps);
            updateStepsUI();
        }

        function updateStepsUI() {
            document.getElementById('stepsCount').innerText = `${steps.toLocaleString()} / 10,000`;
        }

        // Утренняя зарядка
        function toggleRoutine(checkbox) {
            if (checkbox.checked) {
                checkbox.parentElement.style.textDecoration = 'line-through';
                checkbox.parentElement.style.color = '#718096';
            } else {
                checkbox.parentElement.style.textDecoration = 'none';
                checkbox.parentElement.style.color = '#2d3748';
            }
        }

        // Симуляция тренировки для карты мышц
        function simulateWorkout() {
            const chest = document.getElementById('m-chest');
            chest.classList.add('worked');
            chest.querySelector('.muscle-status').innerText = '10 / 10 подходов (Цель достигнута!)';
            alert('Тренировка учтена! Группа мышц (Грудь) подсвечена как проработанная.');
        }
    </script>
</body>
</html>
