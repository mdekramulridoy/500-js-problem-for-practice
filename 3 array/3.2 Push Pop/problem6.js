//তুই একটা প্রোগ্রাম বানাতে চাস যেটাতে 'আম' নামক একটা ফলের লিস্টে আছে কি না সেটা চেক করবে। যদি থাকে তবে আউটপুটে বলবে ‘আম আছে’, আর না থাকলে বলবে ‘আম নেই, বাজারে যাও’। ফলের অ্যারেতে 'আপেল', 'কলা', 'আম' ও 'লিচু' আছে।

let fruits = ["Apple", "Banana", "Mango", "Litchi"];
console.log(
  "Problem 6:",
  fruits.includes("Mango") ? "Mango আছে" : "Mango নেই, বাজারে যাও"
);