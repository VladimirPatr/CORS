
const data = [
  {
    name: 'Корней',
    surname: 'Петров',
    phone: '+79514545454',
  },
  {
    name: 'Игорь',
    surname: 'Семёнов',
    phone: '+79999999999',
  },
  {
    name: 'Семён',
    surname: 'Иванов',
    phone: '+79800252525',
  },
  {
    name: 'Мария',
    surname: 'Попова',
    phone: '+79876543210',
  },
]

import modulesCreateElements from './modules/createElements.js';
import modulesRender from './modules/render.js';
import modulesControl from './modules/control.js';
import modulesServiceStorage from './modules/serviceStorage.js';

const {
  addContactData,
  createContainer,
  createHeader,
  createLogo,
  createProposal,
  createMain,
  createFooter,
  createButtonsGroup,
  createTable,
  createForm,
  createRow ,  		
} = modulesCreateElements;

const {
  renderPhoneBook,
  renderContacts, 		
} = modulesRender;

const {
  hoverRow,
  modalControl,
  deleteControl,
  addContactPage,
  formControl,		
} = modulesControl;

const {
  removeStorage,
  getStorage,
  setStorage,
  firsLoad,		
} = modulesServiceStorage;

{

  //функция запуска всех функций INIT
  const init = (selectorApp, title) => {
    localStorage.clear();
    //получение констант
    const app = document.querySelector(selectorApp)

    const { list, logo, btnAdd, formOverlay, form, btnDel } = renderPhoneBook(
      app,
      title,
    )

    //функционал   
    let firstStor = firsLoad();

    // const allRow = renderContacts(list, data) //присваиват создание таблицы и заполнение её из массива контактов
    const allRow = renderContacts(list, firstStor) //присваиват создание таблицы и заполнение её из массива контактов DATA
    const { closeModal } = modalControl(btnAdd, formOverlay) //присваивает функцию закрытия и открытия модального окна по клику

    hoverRow(allRow, logo); //функция для показа номера тел в шапке при наведении на него в таблице
    deleteControl(btnDel, list) //вызывает фунцию добавления столбца с иконками удаления строк
    formControl(form, list, closeModal) //функция с событиями формы модального окна при срабатывании submit
  }
  window.addEventListener('storage', e => {
    document.querySelector('#app').innerHTML = '';
   init('#app', 'Владимир')
  })

  window.phoneBookInit = init
}
