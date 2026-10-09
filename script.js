"use strict";

function findMaximum(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

function filterHighForecasts(numbers) {
  const highForecasts = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 20) {
      highForecasts[highForecasts.length] = numbers[i];
    }
  }

  return highForecasts;
}

function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function countLowForecasts(numbers) {
  let lowForecastsCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 5) {
      lowForecastsCount++;
    }
  }

  return lowForecastsCount;
}

function runForecastAnalysis() {
  const growthForecasts = [1, 2, 30, 7, 3, 5];
  let userName = prompt("Введите ваше имя:");

  if (userName === null || userName === "") {
    userName = "Гость";
  }

  alert("Здравствуйте, " + userName + "!");

  const maxForecast = findMaximum(growthForecasts);
  const highForecasts = filterHighForecasts(growthForecasts);
  const sumOfForecasts = calculateSum(growthForecasts);
  const avgGrowth = Math.round(sumOfForecasts / growthForecasts.length * 100) / 100;
  const lowForecastsCount = countLowForecasts(growthForecasts);
  const lowForecastsShare = Math.round(lowForecastsCount / growthForecasts.length * 10000) / 100;

  alert(
    "Средний прогнозируемый рост – " +
    avgGrowth +
    "%, " +
    highForecasts.length +
    " прогнозов – высокие"
  );

  console.log("Прогнозы роста: " + growthForecasts);
  console.log("Максимальный прогноз: " + maxForecast + "%");
  console.log("Сумма прогнозов: " + sumOfForecasts + "%");
  console.log("Количество низких прогнозов: " + lowForecastsCount);
  console.log("Доля низких прогнозов: " + lowForecastsShare + "%");

  if (maxForecast > 50) {
    console.log("Некоторые прогнозы выглядят очень амбициозно!");
  }
}

runForecastAnalysis();
