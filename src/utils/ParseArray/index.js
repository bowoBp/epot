import {Fire} from '../../config';

export const parseArray = (dataObject) => {
  const newArray = [];

  Object.keys(dataObject).map((key) => {
    const dataChat = dataObject[key];
    const newdataChat = [];

    Object.keys(dataChat).map((itemchat) => {
      newdataChat.push({
        id: itemchat,
        data: dataChat[itemchat],
      });
    });

    newArray.push({
      id: key,
      data: newdataChat,
    });
  });
  return newArray;
};

export const objectChatHistory = async (dataObject) => {
  const chatHistory = [];
  const prom = await Object.keys(dataObject).map(async (key) => {
    const urlUidDoctor = `doctors/${dataObject[key].uidPartner}`;
    await Fire.database()
      .ref()
      .child(urlUidDoctor)
      .once('value')
      .then((detailDoctor) => {
        chatHistory.push({
          id: key,
          ...dataObject[key],
          detailDoctor: detailDoctor.val(),
        });
      });
  });
  await Promise.all(prom);
  return chatHistory;
};
