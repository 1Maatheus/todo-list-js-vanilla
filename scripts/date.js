function generateDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  document.querySelector(".day").textContent = day;
  document.querySelector(".month").textContent = months[month];
  document.querySelector(".year").textContent = year;
}
generateDate();
