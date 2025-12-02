<script setup lang="ts">
import SubHeading from "../../elements/SubHeading.vue";

function getNextExamDate(month: number, day: number): string {
  const today = new Date();
  const currentYear = today.getFullYear();
  const thisYearExam = new Date(currentYear, month - 1, day);
  const examYear = today > thisYearExam ? currentYear + 1 : currentYear;

  return `${examYear}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
}

function CalcToDate(date: string): string {
  const today = new Date();
  const year = parseInt(date.slice(0, 4));
  const month = parseInt(date.slice(4, 6)) - 1;
  const day = parseInt(date.slice(6, 8));
  const targetDate = new Date(year, month, day);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffMs = targetDate.getTime() - today.getTime();
  if (diffMs <= 0) return "Už to nastalo!";

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(diffDays / 30.44);
  const weeks = Math.floor((diffDays % 30.44) / 7);
  const days = Math.floor(diffDays % 7);

  if (months > 0)
    return `${months} ${months > 4 ? "měsíců" : months > 1 ? "měsíce" : "měsíc"}`;
  if (weeks > 0)
    return `${weeks} ${weeks > 4 ? "týdnů" : weeks > 1 ? "týdny" : "týden"}`;
  if (days > 0)
    return `${days} ${days > 4 ? "dní" : days > 1 ? "dny" : "den"}`;

  return "Zítra!";
}

const exams = [
  { name: "Didaktický test", month: 4, day: 1 },
  { name: "Sloh", month: 3, day: 31 },
  { name: "Ústní zkouška", month: 6, day: 2 },
];
</script>

<template>
  <div class="wrapper">
    <section class="countdowns">
      <div
        v-for="exam in exams"
        :key="exam.name"
        class="exam-card"
      >
        <div class="exam-header">
          <SubHeading>{{ exam.name }}</SubHeading>
          <div class="date">cca. {{ exam.day }}.{{ exam.month }}.</div>
        </div>
        <div class="exam-body">
          <span class="time-remaining">{{ CalcToDate(getNextExamDate(exam.month, exam.day)) }}</span>
        </div>
        <div class="progress-bar"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  container: time-cnt / inline-size;
}

.countdowns {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 2rem;
}

.exam-card {
  display: flex;
  flex-direction: column;
  background: var(--background-alt, #1e1e2f);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 350px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.exam-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date {
  font-size: clamp(0.9rem, 1vw, 1.3rem);
  color: var(--accent, #ffcc00);
  font-weight: 600;
}

.exam-body {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.time-remaining {
  font-size: clamp(1.2rem, 2vw , 1.6rem);
  font-weight: 700;
  color: var(--text-primary, #fff);
  background-color: var(--accent, #ffcc00);
  color: #000;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
}

.progress-bar {
  height: 5px;
  background: linear-gradient(to right, var(--accent, #ffcc00), transparent);
  border-radius: 4px;
  opacity: 0.6;
  margin-top: 1rem;
}

@container time-cnt (width < 700px) {
  .exam-header {
    flex-direction: column;
  }
}
</style>
