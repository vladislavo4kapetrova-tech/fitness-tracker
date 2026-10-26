<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MuscleBalance — Фитнес-трекер</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #FAF5F8;
            margin: 0;
            padding: 20px;
            color: #4A4A4A;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
        }
        header {
            background-color: #F8C8DC;
            padding: 20px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(248, 200, 220, 0.4);
            margin-bottom: 20px;
        }
        h1 { margin: 0; color: #5A3D4A; font-size: 24px; }
        p { margin: 5px 0 0 0; color: #7A5C6B; font-size: 14px; }
        
        .nav-tabs {
            display: flex;
            background: #FFFFFF;
            border-radius: 12px;
            padding: 6px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .tab-btn {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 8px;
            background: transparent;
            color: #777;
            font-weight: bold;
            cursor: pointer;
            font-size: 14px;
        }
        .tab-btn.active {
            background-color: #F8C8DC;
            color: #5A3D4A;
        }
        
        .card {
            background: #FFFFFF;
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.04);
            display: none;
        }
        .card.active {
            display: block;
        }
        
        .workout-link {
            text-decoration: none;
            padding: 14px;
            border-radius: 10px;
            border: 1px solid #F8C8DC;
            color: #5A3D4A;
            display: block;
            background-color: #FFF0F5;
            margin-bottom: 10px;
            text-align: center;
            font-weight: bold;
        }
        
        select {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #DDD;
            margin-bottom: 20px;
            font-size: 14px;
            box-sizing: border-box;
        }
        
        .muscle-tag {
            display: inline-block;
            background-color: #F8C8DC;
            color: #5A3D4A;
            padding: 6px 12px;
            border-radius: 12px;
            margin: 4px;
            font-size: 13px;
            font-weight: bold;
        }
        
        .progress-bar {
            width: 100%;
            background-color: #E0E0E0;
            height: 12px;
            border-radius: 6px;
            overflow: hidden;
            margin-top: 8px;
        }
        .progress-fill {
            width: 80%;
            background-color: #F8C8DC;
            height: 100%;
        }
        
        .recommendations {
            background-color: #F0F8FF;
            border-left: 4px solid #AEC6CF;
            padding: 12px;
            border-radius: 4px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>🌸 MuscleBalance</h1>
        <p>Твой персональный фитнес-трекер и баланс мышц</p>
    </header>

    <div class="nav-tabs">
        <button class="tab-btn active" onclick="switchTab('youtube', event)">▶ YouTube</button>
        <button class="tab-btn" onclick="switchTab('muscles', event)">👤 Мышцы</button>
        <button class="tab-btn" onclick="switchTab('weekly', event)">📊 Итоги</button>
    </div>

    <!-- Вкладка 1: YouTube -->
    <div id="youtube" class="card active">
        <h2 style="color: #5A3D4A; margin-top: 0;">Тренировки на YouTube</h2>
        <p style="margin-bottom: 15px;">Выберите комплекс для выполнения:</p>
        <a href="https://www.youtube.com/results?search_query=pilates+workout" target="_blank" class="workout-link">
            🧘‍♀️ Пилатес на все тело
        </a>
        <a href="https://www.youtube.com/results?search_query=strength+workout" target="_blank" class="workout-link" style="border-color: #AEC6CF; background-color: #F0F8FF; color: #3A5A6A;">
            🏋️‍♀️ Силовая тренировка
        </a>
    </div>

    <!-- Вкладка 2: Мышцы -->
    <div id="muscles" class="card">
        <h2 style="color: #5A3D4A; margin-top: 0;">Оценка проработки мышц</h2>
        <label style="display: block; margin-bottom: 8px; font-weight: bold;">Выберите выполненную тренировку:</label>
        <select id="workoutSelect" onchange="updateMuscles()">
            <option value="pilates">Пилатес</option>
            <option value="strength">Силовая тренировка</option>
            <option value="stretching">Растяжка</option>
        </select>

        <div style="text-align: center; margin: 20px 0;">
            <svg width="140" height="260" viewBox="0 0 100 200" style="background: #FAF5F8; border-radius: 20px; padding: 10px;">
                <circle cx="50" cy="25" r="12" fill="#E0E0E0" />
                <rect id="m-torso" x="38" y="42" width="24" height="45" rx="6" fill="#F8C8DC" />
                <rect id="m-arms" x="22" y="42" width="12" height="50" rx="4" fill="#E0E0E0" />
                <rect id="m-arms2" x="66" y="42" width="12" height="50" rx="4" fill="#E0E0E0" />
                <rect id="m-glutes" x="36" y="90" width="28" height="25" rx="4" fill="#F8C8DC" />
                <rect id="m-legs1" x="37" y="118" width="10" height="65" rx="4" fill="#E0E0E0" />
                <rect id="m-legs2" x="53" y="118" width="10" height="65" rx="4" fill="#E0E0E0" />
            </svg>
        </div>

        <div style="background: #FAF5F8; padding: 12px; border-radius: 10px; text-align: center;">
            <strong>Задействованные зоны:</strong>
            <div id="muscleTags" style="margin-top: 6px;">
                <span class="muscle-tag">Пресс</span>
                <span class="muscle-tag">Спина</span>
                <span class="muscle-tag">Кор</span>
            </div>
        </div>
    </div>

    <!-- Вкладка 3: Итоги -->
    <div id="weekly" class="card">
        <h2 style="color: #5A3D4A; margin-top: 0;">Итоги недели и рекомендации</h2>
        <p>Выполнено тренировок: <strong>4 из 5</strong></p>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>

        <div class="recommendations">
            <h4 style="margin: 0 0 6px 0; color: #3A5A6A;">💡 Персональные рекомендации:</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #4A4A4A;">
                <li>Отличный баланс нагрузки на мышцы кора и пресса!</li>
                <li>Для гармонии добавьте 1 легкую растяжку в конце недели.</li>
                <li>Не забывайте соблюдать питьевой режим после занятий.</li>
            </ul>
        </div>
    </div>
</div>

<script>
    function switchTab(tabId, event) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        
        document.getElementById(tabId).classList.add('active');
        event.currentTarget.classList.add('active');
    }

    function updateMuscles() {
        const val = document.getElementById('workoutSelect').value;
        const torso = document.getElementById('m-torso');
        const arms1 = document.getElementById('m-arms');
        const arms2 = document.getElementById('m-arms2');
        const glutes = document.getElementById('m-glutes');
        const legs1 = document.getElementById('m-legs1');
        const legs2 = document.getElementById('m-legs2');
        const tagsContainer = document.getElementById('muscleTags');

        if (val === 'pilates') {
            torso.style.fill = '#F8C8DC';
            arms1.style.fill = '#E0E0E0';
            arms2.style.fill = '#E0E0E0';
            glutes.style.fill = '#F8C8DC';
            legs1.style.fill = '#E0E0E0';
            legs2.style.fill = '#E0E0E0';
            tagsContainer.innerHTML = '<span class="muscle-tag">Пресс</span><span class="muscle-tag">Спина</span><span class="muscle-tag">Кор</span>';
        } else if (val === 'strength') {
            torso.style.fill = '#E0E0E0';
            arms1.style.fill = '#AEC6CF';
            arms2.style.fill = '#AEC6CF';
            glutes.style.fill = '#F8C8DC';
            legs1.style.fill = '#AEC6CF';
            legs2.style.fill = '#AEC6CF';
            tagsContainer.innerHTML = '<span class="muscle-tag">Ягодицы</span><span class="muscle-tag">Ноги</span><span class="muscle-tag">Руки</span>';
        } else {
            torso.style.fill = '#F8C8DC';
            arms1.style.fill = '#E0E0E0';
            arms2.style.fill = '#E0E0E0';
            glutes.style.fill = '#E0E0E0';
            legs1.style.fill = '#AEC6CF';
            legs2.style.fill = '#AEC6CF';
            tagsContainer.innerHTML = '<span class="muscle-tag">Спина</span><span class="muscle-tag">Ноги</span><span class="muscle-tag">Шея</span>';
        }
    }
</script>

</body>
</html>
