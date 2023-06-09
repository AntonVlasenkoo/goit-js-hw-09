import Notiflix from 'notiflix';
const formRef = document.querySelector('.form');
formRef.addEventListener('submit', makePromises);

//========================================================
function makePromises(e) {
  e.preventDefault();
  //------------------------------------------------
  const formData = e.currentTarget;
  let delayData = Number(formData['delay'].value);
  const stepData = Number(formData['step'].value);
  const amountData = Number(formData['amount'].value);
  //------------------------------------------------
  console.log(delayData, stepData, amountData);

  for (let i = 0; i < amountData; i += 1) {
    let position = i + 1;
    console.log(position);
    //---------------------------------
    let delay = delayData + stepData * i;
    console.log(delay);
    createPromise(position, delay).then(onMakeSuccess).catch(onMakeError);
  }
}

//========================================================
const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
};
//------------------------------------------------
const onMakeSuccess = ({ position, delay }) => {
  setTimeout(() => {
    Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
  }, delay);
};

const onMakeError = ({ position, delay }) => {
  setTimeout(() => {
    Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
  }, delay);
};
//========================================================
