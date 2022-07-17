const form = document.querySelectorAll("form");
// const notification = document.querySelector(".notification");
// const modalWrapper = document.querySelector('.modal-wrapper');

const genereteString = (name, phone) => "phone=" + phone + "&name=" + name;

// const successSend = () => {
//   const murkup = `<p class="notification__text">Ваше повідомлення відправлене!(</p>`;

//   notification.classList.add("success", "active");
//   notification.insertAdjacentHTML("afterbegin", murkup);

//   setTimeout(() => {
//     notification.classList.remove("success", "active");
//     notification.innerHTML = "";
//   }, 4000);
// };

// const errorSend = () => {
//   const murkup = `<p class="notification__text">Вибачте, помилка :(</p>`;

//   notification.classList.add("error", "active");
//   notification.insertAdjacentHTML("afterbegin", murkup);

//   setTimeout(() => {
//     notification.classList.remove("success", "active");
//     notification.innerHTML = "";
//   }, 4000);
// };

const sendEmail = (event) => {
    event.preventDefault();

    const name = event.srcElement.name.value;
    const phone = event.srcElement.phone.value;
    const data = genereteString(name, phone);

    fetch("https://angency.protargeting.team/aerock/send.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: data,
    })
        .then(() => {
            //   successSend();
            event.srcElement.name.value = "";
            event.srcElement.phone.value = "";
            //   modalWrapper.style.display = 'none';
        })
        .catch((error) => {
            console.log('error', error)
            //   errorSend();
        });
};

form.forEach(() => addEventListener("submit", sendEmail));