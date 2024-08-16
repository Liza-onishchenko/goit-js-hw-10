//Підключила бібліотеку
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//Отримала посилання на інпут, кнопку, кожен спан
const dataPicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const dayOutput = document.querySelector('[data-days]');
const hoursOutput = document.querySelector('[data-hours]');
const minutesOutput = document.querySelector('[data-minutes]');
const secondOutput = document.querySelector('[data-seconds]');

//Додала слухача на кнопку
startButton.addEventListener('click', startTimer);

//Створила дві змінні, щоб потім могла почистити 
let intervalId = null;
let curentSelectedDate = null; 

//Долала умову, перевіряю якщо вибрана дата менша 
//поточної - нічого не робимо, викидую повідомлення.
//Якщо нормальна дата,вона записалась в curentSelectedDate і кнопка роздісейбилась

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date) {
            return iziToast.error({
                    position:"topRight",
                    message: 'Please choose a date in the future',
                 });
        }
        curentSelectedDate = selectedDates[0];
        startButton.disabled = false;
    },
};

// Ініціюю метод бібліотеки
//Передала посилання до якого звертатись на інпут, і обєкт налаштування
flatpickr(dataPicker,options);


//Відповіда щоб при натискані на кнопку запускався таймер, щоб дисейблився інпут та кнопка
//Коли таймер setInterval запускається він викликає функцію updateTimer
//Вона кожного разу вираховує різницю в часі,від вибраної дати віднімає поточну
//як розрахунок прийшов до 0 або менше вмикаємо інпут і чистить інтервал щоб не викликалась знов

function startTimer () {
    dataPicker.disabled = true;
    startButton.disabled = true;
    intervalId = setInterval (updateTimer, 1000);
}

function updateTimer () {
    const curentTime = curentSelectedDate - new Date();
    if (curentTime <= 0) {
        dataPicker.disabled = false;
        clearInterval(intervalId);
        return;
    }
    const { days, hours, minutes, seconds } = convertMs(curentTime);
    
    dayOutput.textContent = String(days).padStart(2, 0);
    hoursOutput.textContent = String(hours).padStart(2, 0);
    minutesOutput.textContent = String(minutes).padStart(2, 0);
    secondOutput.textContent = String(seconds).padStart(2, 0);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days = 
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}
  
  