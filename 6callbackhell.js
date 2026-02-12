// Callback Mental Model

// “I don’t know WHEN my task will finish,
// so I give you a FUNCTION to call AFTER it’s done.”

// A callback function is a function passed as an argument to another function and executed later, often used to handle asynchronous operations like API calls, events, or timers. Callbacks enable non-blocking behavior in JavaScript but can lead to callback hell if overused, which is why promises and async/await were introduced.

function validateForm(data, callback) {
  if(data.email.includes("@")) {
    callback(null, data);
  } else {
    callback("Invalid Email");
  }
}

function saveToDB(data, callback) {
  setTimeout(() => {
    callback(null, "Saved Successfully");
  }, 1000);
}

validateForm({ email: "test@gmail.com" }, function(err, validData) {
  if(err) {
    console.error(err);
    return;
  }

  saveToDB(validData, function(err, result) {
    if(err) {
      console.error(err);
      return;
    }

    console.log(result);
  });
});



// 1️⃣1️⃣ Callbacks in Array Methods (REAL LIFE 🔥)
// map
const prices = [100, 200, 300];

const gstPrices = prices.map(function(price) {
  return price + price * 0.18;
});

// filter
const ages = [12, 20, 17, 25];

const adults = ages.filter(age => age >= 18);

// forEach
users.forEach(user => console.log(user.name));


// 📌 THESE ARE CALLBACKS TOO (Most ignored fact)

// 1️⃣2️⃣ Callback vs Normal Function
// Aspect	Normal Function	Callback
// Called by	You	Another function
// Timing	Immediate	Later
// Use	Logic	Control flow
// 1️⃣3️⃣ Interview Traps ❌

// ❌ Thinking callback = async only
// ✔ Callbacks can be sync or async

// ❌ Forgetting error handling
// ✔ Always handle errors

// ❌ Deep nesting
// ✔ Use promises / async-await

// 1️⃣4️⃣ How Callback Evolved (Career Growth 📈)

// 1️⃣ Callbacks
// 2️⃣ Promises
// 3️⃣ Async / Await

// 👉 Promises solve callback hell

