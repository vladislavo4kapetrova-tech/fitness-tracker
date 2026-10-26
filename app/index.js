import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

function App() {
  const [activeTab, setActiveTab] = useState('youtube');
  const [selectedWorkout, setSelectedWorkout] = useState('pilates');

  const getMuscles = () => {
    if (selectedWorkout === 'pilates') return ['Пресс', 'Спина', 'Кор'];
    if (selectedWorkout === 'strength') return ['Ягодицы', 'Ноги', 'Руки'];
    return ['Спина', 'Ноги', 'Шея'];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌸 MuscleBalance</Text>
        <Text style={styles.headerSubtitle}>Твой персональный фитнес-трекер и баланс мышц</Text>
      </View>

      {/* Вкладки */}
      <View style={styles.navTabs}>
        <TouchableOpacity 
          style={[styles.tabBtn, activeTab === 'youtube' && styles.activeTab]} 
          onPress={() => setActiveTab('youtube')}
        >
          <Text style={[styles.tabText, activeTab === 'youtube' && styles.activeText]}>▶ YouTube</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tabBtn, activeTab === 'muscles' && styles.activeTab]} 
          onPress={() => setActiveTab('muscles')}
        >
          <Text style={[styles.tabText, activeTab === 'muscles' && styles.activeText]}>👤 Мышцы</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tabBtn, activeTab === 'weekly' && styles.activeTab]} 
          onPress={() => setActiveTab('weekly')}
        >
          <Text style={[styles.tabText, activeTab === 'weekly' && styles.activeText]}>📊 Итоги</Text>
        </TouchableOpacity>
      </View>

      {/* Вкладка 1: YouTube */}
      {activeTab === 'youtube' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Тренировки на YouTube</Text>
          <TouchableOpacity 
            style={styles.workoutLink}
            onPress={() => Linking.openURL('https://www.youtube.com/results?search_query=pilates+workout')}
          >
            <Text style={styles.linkText}>🧘‍♀️ Пилатес на все тело</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.workoutLink, {borderColor: '#AEC6CF', backgroundColor: '#F0F8FF'}]}
            onPress={() => Linking.openURL('https://www.youtube.com/results?search_query=strength+workout')}
          >
            <Text style={[styles.linkText, {color: '#3A5A6A'}]}>🏋️‍♀️ Силовая тренировка</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Вкладка 2: Мышцы */}
      {activeTab === 'muscles' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Оценка проработки мышц</Text>
          <Text style={styles.label}>Выберите тренировку:</Text>
          
          <View style={styles.selectRow}>
            <TouchableOpacity 
              style={[styles.selectBtn, selectedWorkout === 'pilates' && styles.selectActive]}
              onPress={() => setSelectedWorkout('pilates')}
            >
              <Text style={styles.selectText}>Пилатес</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.selectBtn, selectedWorkout === 'strength' && styles.selectActive]}
              onPress={() => setSelectedWorkout('strength')}
            >
              <Text style={styles.selectText}>Силовая</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.muscleBox}>
            <Text style={styles.muscleTitle}>Задействованные зоны:</Text>
            <View style={styles.tagsContainer}>
              {getMuscles().map((m, index) => (
                <View key={index} style={styles.muscleTag}>
                  <Text style={styles.tagText}>{m}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* Вкладка 3: Итоги */}
      {activeTab === 'weekly' && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Итоги недели и рекомендации</Text>
          <Text style={styles.statText}>Выполнено тренировок: <Text style={{fontWeight: 'bold'}}>4 из 5</Text></Text>
          
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.recommendations}>
            <Text style={styles.recTitle}>💡 Персональные рекомендации:</Text>
            <Text style={styles.recText}>• Отличный баланс нагрузки на мышцы кора и пресса!</Text>
            <Text style={styles.recText}>• Для гармонии добавьте 1 легкую растяжку.</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FAF5F8',
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#F8C8DC',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#5A3D4A' },
  headerSubtitle: { fontSize: 13, color: '#7A5C6B', marginTop: 4, textAlign: 'center' },
  navTabs: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 6,
    width: '100%',
    maxWidth: 500,
    marginBottom: 20,
  },
  tabBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  activeTab: { backgroundColor: '#F8C8DC' },
  tabText: { fontSize: 14, fontWeight: 'bold', color: '#777' },
  activeText: { color: '#5A3D4A' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#5A3D4A', marginBottom: 12 },
  workoutLink: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F8C8DC',
    backgroundColor: '#FFF0F5',
    marginBottom: 10,
    alignItems: 'center',
  },
  linkText: { fontWeight: 'bold', color: '#5A3D4A' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#4A4A4A', marginBottom: 8 },
  selectRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  selectBtn: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  selectActive: { backgroundColor: '#F8C8DC', borderColor: '#F8C8DC' },
  selectText: { fontWeight: 'bold', color: '#5A3D4A' },
  muscleBox: { backgroundColor: '#FAF5F8', padding: 12, borderRadius: 10, alignItems: 'center' },
  muscleTitle: { fontWeight: 'bold', color: '#5A3D4A', marginBottom: 8 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  muscleTag: {
    backgroundColor: '#F8C8DC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    margin: 4,
  },
  tagText: { color: '#5A3D4A', fontWeight: 'bold', fontSize: 12 },
  statText: { fontSize: 14, color: '#4A4A4A', marginBottom: 8 },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 15,
  },
  progressFill: { width: '80%', height: '100%', backgroundColor: '#F8C8DC' },
  recommendations: {
    backgroundColor: '#F0F8FF',
    borderLeftWidth: 4,
    borderLeftColor: '#AEC6CF',
    padding: 12,
    borderRadius: 4,
  },
  recTitle: { fontWeight: 'bold', color: '#3A5A6A', marginBottom: 4 },
  recText: { fontSize: 13, color: '#4A4A4A', marginBottom: 2 },
});

registerRootComponent(App);
