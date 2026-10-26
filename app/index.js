import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function App() {
  const [steps, setSteps] = useState(0);
  const [workoutActive, setWorkoutActive] = useState(false);

  const handleAddSteps = () => {
    setSteps(prev => prev + 1000);
  };

  const toggleWorkout = () => {
    setWorkoutActive(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Заголовок */}
        <View style={styles.header}>
          <Text style={styles.title}>Фитнес-трекер 🏃‍♀️</Text>
          <Text style={styles.subtitle}>Дневник активности и тренировок</Text>
        </View>

        {/* Карточка шагов */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Шаги за сегодня</Text>
          <Text style={styles.counterText}>{steps.toLocaleString()} / 10,000</Text>
          
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleAddSteps}>
            <Text style={styles.buttonText}>+ 1,000 шагов</Text>
          </TouchableOpacity>
        </View>

        {/* Карточка тренировки */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Текущая тренировка</Text>
          <Text style={styles.statusText}>
            Статус: {workoutActive ? '🔥 В процессе' : '⏸ Отдых'}
          </Text>

          <TouchableOpacity 
            style={[styles.buttonPrimary, workoutActive ? styles.buttonDanger : styles.buttonSuccess]} 
            onPress={toggleWorkout}
          >
            <Text style={styles.buttonText}>
              {workoutActive ? 'Завершить тренировку' : 'Начать тренировку'}
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a5568',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3182ce',
    marginVertical: 10,
  },
  statusText: {
    fontSize: 18,
    color: '#2d3748',
    marginVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: '#3182ce',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius:
