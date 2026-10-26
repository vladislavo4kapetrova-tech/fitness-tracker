import React, { useMemo, useState } from 'react';
import {
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const translations = {
  en: {
    appTitle: 'FitPulse Tracker',
    langBtn: '🇺🇦 UA',
    ageLabel: 'Your Age:',
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

const muscleOptions = translations.uk.musclesList;
const weeklyData = [
  { day: 'Пн', steps: 8200, active: true },
  { day: 'Вт', steps: 6500, active: false },
  { day: 'Ср', steps: 9400, active: true },
  { day: 'Чт', steps: 10200, active: true },
  { day: 'Пт', steps: 7800, active: true },
  { day: 'Сб', steps: 11500, active: true },
  { day: 'Нд', steps: 5400, active: false },
];

const getAgeGoals = (ageValue) => {
  if (ageValue < 18) return { steps: 12000, minutes: 60 };
  if (ageValue <= 39) return { steps: 10000, minutes: 45 };
  if (ageValue <= 64) return { steps: 8000, minutes: 30 };
  return { steps: 6000, minutes: 20 };
};

export default function HomeScreen() {
  const [currentLang, setCurrentLang] = useState('uk');
  const [age, setAge] = useState('30');
  const [steps, setSteps] = useState(7500);
  const [selectedMuscles, setSelectedMuscles] = useState(['Ноги', 'Прес']);

  const t = translations[currentLang];
  const numAge = Number.parseInt(age, 10) || 30;
  const goals = useMemo(() => getAgeGoals(numAge), [numAge]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'uk' ? 'en' : 'uk'));
  };

  const toggleMuscle = (muscle) => {
    setSelectedMuscles((prev) =>
      prev.includes(muscle)
        ? prev.filter((item) => item !== muscle)
        : [...prev, muscle]
    );
  };

  const openYouTubeWorkout = async () => {
    const url = 'https://www.youtube.com/results?search_query=pilates+strength+workout+full+body';

    try {
      if (Platform.OS === 'web') {
        if (typeof window !== 'undefined') {
          window.open(url, '_blank', 'noopener,noreferrer');
          return;
        }
      }

      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        console.warn('Opening YouTube link is not supported on this platform.');
      }
    } catch (error) {
      console.warn('Unable to open workout link:', error);
    }
  };

  const getMuscleLabel = (muscle, index) => {
    if (currentLang === 'en') {
      return translations.en.musclesList[index];
    }
    return muscle;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.appTitle}>{t.appTitle}</Text>
        <TouchableOpacity style={styles.langButton} onPress={toggleLanguage}>
          <Text style={styles.langButtonText}>{t.langBtn}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>{t.ageLabel}</Text>
            <TextInput
              style={styles.inputSmall}
              keyboardType="numeric"
              maxLength={3}
              value={age}
              onChangeText={setAge}
              placeholderTextColor="#94a3b8"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <Text style={styles.goalText}>
            {t.stepsGoal} <Text style={styles.bold}>{goals.steps.toLocaleString()}</Text>
          </Text>
          <Text style={styles.goalText}>
            {t.activeMinGoal} <Text style={styles.bold}>{goals.minutes} хв</Text>
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.muscleHeader}</Text>

          <View style={styles.muscleContainer}>
            {muscleOptions.map((muscle, index) => {
              const isSelected = selectedMuscles.includes(muscle);
              const displayName = getMuscleLabel(muscle, index);

              return (
                <TouchableOpacity
                  key={muscle}
                  style={[
                    styles.muscleChip,
                    isSelected && styles.muscleChipActive,
                  ]}
                  onPress={() => toggleMuscle(muscle)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.muscleText,
                      isSelected && styles.muscleTextActive,
                    ]}
                  >
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
              <View
                key={`${item.day}-${idx}`}
                style={[
                  styles.dayColumn,
                  item.active && styles.dayColumnActive,
                ]}
              >
                <Text style={styles.dayText}>{item.day}</Text>
                <View
                  style={[
                    styles.dayIndicator,
                    item.active ? styles.indicatorActive : styles.indicatorInactive,
                  ]}
                />
                <Text style={styles.daySteps}>{item.steps}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.trackerHeader}</Text>
          <Text style={styles.statLabel}>
            {t.stepsDone} <Text style={styles.bold}>{steps}</Text>
          </Text>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => setSteps((prev) => prev + 1000)}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonSecondaryText}>{t.addSteps}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.videoHeader}</Text>

          <TouchableOpacity
            style={styles.youtubeButton}
            onPress={openYouTubeWorkout}
            activeOpacity={0.8}
          >
            <Text style={styles.youtubeButtonText}>{t.watchVideo}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f8fafc',
    flexShrink: 1,
  },
  langButton: {
    backgroundColor: '#334155',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
  },
  langButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#38bdf8',
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputSmall: {
    backgroundColor: '#0f172a',
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569',
    width: 80,
    textAlign: 'center',
  },
  goalText: {
    color: '#cbd5e1',
    fontSize: 15,
    marginBottom: 4,
  },
  bold: {
    fontWeight: '700',
    color: '#fff',
  },
  muscleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  muscleChip: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#334155',
    marginRight: 8,
    marginBottom: 8,
  },
  muscleChipActive: {
    backgroundColor: '#0284c7',
    borderColor: '#38bdf8',
  },
  muscleText: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '600',
  },
  muscleTextActive: {
    color: '#fff',
  },
  subText: {
    color: '#94a3b8',
    fontSize: 13,
    marginBottom: 10,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 4,
  },
  dayColumn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 10,
    marginHorizontal: 2,
    minWidth: 0,
  },
  dayColumnActive: {
    borderColor: '#22c55e',
    borderWidth: 1,
  },
  dayText: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 4,
  },
  dayIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginVertical: 6,
  },
  indicatorActive: {
    backgroundColor: '#22c55e',
  },
  indicatorInactive: {
    backgroundColor: '#475569',
  },
  daySteps: {
    color: '#cbd5e1',
    fontSize: 10,
  },
  statLabel: {
    color: '#cbd5e1',
    fontSize: 15,
    marginBottom: 8,
  },
  buttonSecondary: {
    backgroundColor: '#334155',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: '600',
  },
  youtubeButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  youtubeButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
