import { useState } from 'react';
import {
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const translations = {
  en: {
    appTitle: 'FitPulse Tracker',
    langBtn: '🇺🇦 UA',
    ageLabel: 'Your Age:',
    goalsHeader: 'Daily Goals (WHO Age-Based)',
    stepsGoal: 'Steps Goal:',
    activeMinGoal: 'Active Minutes:',
    muscleHeader: 'Muscles Worked Today',
    musclesList: ['Legs', 'Core', 'Back', 'Arms', 'Glutes', 'Full Body'],
    weeklyHeader: 'Weekly Activity (Mon - Sun)',
    weeklySub: 'Steps & Workout Days',
    trackerHeader: 'Today Progress',
    stepsDone: 'Steps:',
    addSteps: '+1,000 Steps',
    videoHeader: 'Video Workouts (YouTube)',
    watchVideo: 'Open Muscle & Pilates Workout 🎥',
  },
  uk: {
    appTitle: 'FitPulse Трекер',
    langBtn: '🇬🇧 EN',
    ageLabel: 'Ваш вік:',
    goalsHeader: 'Норми на день (за віком ВООЗ)',
    stepsGoal: 'Ціль кроків:',
    activeMinGoal: 'Активні хвилини:',
    muscleHeader: 'Задіяні м’язи сьогодні',
    musclesList: ['Ноги', 'Прес', 'Спина', 'Руки', 'Сідниці', 'Все тіло'],
    weeklyHeader: 'Активність за тиждень (Пн - Нд)',
    weeklySub: 'Кроки та дні тренувань',
    trackerHeader: 'Прогрес за сьогодні',
    stepsDone: 'Кроків:',
    addSteps: '+1 000 кроків',
    videoHeader: 'Відео-тренування (YouTube)',
    watchVideo: 'Відкрити тренування на м’язи і пілатес 🎥',
  },
};

export default function App() {
  const [currentLang, setCurrentLang] = useState('uk');
  const [age, setAge] = useState('30');
  const [steps, setSteps] = useState(7500);
  const [selectedMuscles, setSelectedMuscles] = useState(['Ноги', 'Прес']);

  const weeklyData = [
    { day: 'Пн', steps: 8200, active: true },
    { day: 'Вт', steps: 6500, active: false },
    { day: 'Ср', steps: 9400, active: true },
    { day: 'Чт', steps: 10200, active: true },
    { day: 'Пт', steps: 7800, active: true },
    { day: 'Сб', steps: 11500, active: true },
    { day: 'Нд', steps: 5400, active: false },
  ];

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'uk' ? 'en' : 'uk'));
  };

  const t = translations[currentLang];
  const rawMuscles = translations.uk.musclesList;

  const toggleMuscle = (muscle) => {
    if (selectedMuscles.includes(muscle)) {
      setSelectedMuscles(selectedMuscles.filter(m => m !== muscle));
    } else {
      setSelectedMuscles([...selectedMuscles, muscle]);
    }
  };

  const numAge = parseInt(age) || 30;
  const getAgeGoals = (a) => {
    if (a < 18) return { steps: 12000, minutes: 60 };
    if (a <= 39) return { steps: 10000, minutes: 45 };
    if (a <= 64) return { steps: 8000, minutes: 30 };
    return { steps: 6000, minutes: 20 };
  };
  const goals = getAgeGoals(numAge);

  const openYouTubeWorkout = () => {
    const url = 'https://www.youtube.com/results?search_query=pilates+strength+workout+full+body';
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>{t.appTitle}</Text>
        <TouchableOpacity style={styles.langButton} onPress={toggleLanguage}>
          <Text style={styles.langButtonText}>{t.langBtn}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>{t.ageLabel}</Text>
            <TextInput
              style={styles.inputSmall}
              keyboardType="numeric"
              maxLength={3}
              value={age}
              onChangeText={setAge}
            />
          </View>
          <Text style={styles.goalText}>{t.stepsGoal} <Text style={styles.bold}>{goals.steps.toLocaleString()}</Text></Text>
          <Text style={styles.goalText}>{t.activeMinGoal} <Text style={styles.bold}>{goals.minutes} хв</Text></Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.muscleHeader}</Text>
          <View style={styles.muscleContainer}>
            {rawMuscles.map((muscle, index) => {
              const isSelected = selectedMuscles.includes(muscle);
              const displayName = currentLang === 'en' ? t.musclesList[index] : muscle;
              return (
                <TouchableOpacity
                  key={muscle}
                  style={[styles.muscleChip, isSelected && styles.muscleChipActive]}
                  onPress={() => toggleMuscle(muscle)}
                >
                  <Text style={[styles.muscleText, isSelected && styles.muscleTextActive]}>
                    {displayName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.weeklyHeader}</Text>
          <Text style={styles.subText}>{t.weeklySub}</Text>
          <View style={styles.weekRow}>
            {weeklyData.map((item, idx) => (
              <View key={idx} style={[styles.dayColumn, item.active && styles.dayColumnActive]}>
                <Text style={styles.dayText}>{item.day}</Text>
                <View style={[styles.dayIndicator, item.active ? styles.indicatorActive : styles.indicatorInactive]} />
                <Text style={styles.daySteps}>{item.steps}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.trackerHeader}</Text>
          <Text style={styles.statLabel}>{t.stepsDone} <Text style={styles.bold}>{steps}</Text></Text>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => setSteps(steps + 1000)}>
            <Text style={styles.buttonSecondaryText}>{t.addSteps}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.videoHeader}</Text>
          <TouchableOpacity style={styles.youtubeButton} onPress={openYouTubeWorkout}>
            <Text style={styles.youtubeButtonText}>{t.watchVideo}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  appTitle: { fontSize: 18, fontWeight: 'bold', color: '#f8fafc' },
  langButton: { backgroundColor: '#334155', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },
  langButtonText: { color: '#fff', fontWeight: 'bold' },
  scrollContent: { padding: 16 },
  card: { backgroundColor: '#1e293b', borderRadius: 16, padding: 16, marginBottom: 14 },
  cardTitle: { fontSize: 17, fontWeight: 'bold', color: '#38bdf8', marginBottom: 10 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  inputSmall: { backgroundColor: '#0f172a', color: '#fff', fontSize: 16, paddingHorizontal: 15, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#475569', width: 70, textAlign: 'center' },
  goalText: { color: '#cbd5e1', fontSize: 15, marginBottom: 4 },
  bold: { fontWeight: 'bold', color: '#fff' },
  muscleContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 5 },
  muscleChip: { backgroundColor: '#0f172a', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1, borderColor: '#334155' },
  muscleChipActive: { backgroundColor: '#0284c7', borderColor: '#38bdf8' },
  muscleText: { color: '#94a3b8', fontSize: 14, fontWeight: '600' },
  muscleTextActive: { color: '#fff' },
  subText: { color: '#94a3b8', fontSize: 13, marginBottom: 10 },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  dayColumn: { alignItems: 'center', backgroundColor: '#0f172a', paddingVertical: 8, paddingHorizontal: 6, borderRadius: 10, width: '13%' },
  dayText: { color: '#94a3b8', fontSize: 12, marginBottom: 4 },
  dayIndicator: { width: 8, height: 8, borderRadius: 4, marginVertical: 6 },
  indicatorActive: { backgroundColor: '#22c55e' },
  indicatorInactive: { backgroundColor: '#475569' },
  daySteps: { color: '#cbd5e1', fontSize: 10 },
  statLabel: { color: '#cbd5e1', fontSize: 15, marginBottom: 8 },
  buttonSecondary: { backgroundColor: '#334155', paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
  buttonSecondaryText: { color: '#f8fafc', fontSize: 15, fontWeight: '600' },
  youtubeButton: { backgroundColor: '#ef4444', paddingVertical: 12, borderRadius: 12, alignItems: 'center', marginTop: 5 },
  youtubeButtonText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
});