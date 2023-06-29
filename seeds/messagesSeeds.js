const { Messages } = require('../models');

const messageData = [
    { "message_text": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "user_id": 5, "room_id": 3 },
    { "message_text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", "user_id": 1, "room_id": 10 },
    { "message_text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", "user_id": 7, "room_id": 6 },
    { "message_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.", "user_id": 6, "room_id": 5 },
    { "message_text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.", "user_id": 2, "room_id": 5 },
    { "message_text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.", "user_id": 1, "room_id": 6 },
    { "message_text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.", "user_id": 8, "room_id": 10 },
    { "message_text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.", "user_id": 6, "room_id": 3 },
    { "message_text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.", "user_id": 6, "room_id": 9 },
    { "message_text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", "user_id": 3, "room_id": 9 },
    { "message_text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "user_id": 1, "room_id": 6 },
    { "message_text": "Phasellus in felis. Donec semper sapien a libero. Nam dui.", "user_id": 9, "room_id": 7 },
    { "message_text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", "user_id": 3, "room_id": 6 },
    { "message_text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.", "user_id": 5, "room_id": 3 },
    { "message_text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.", "user_id": 4, "room_id": 1 },
    { "message_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.", "user_id": 6, "room_id": 8 },
    { "message_text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "user_id": 2, "room_id": 2 },
    { "message_text": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "user_id": 1, "room_id": 8 },
    { "message_text": "In congue. Etiam justo. Etiam pretium iaculis justo.", "user_id": 4, "room_id": 5 },
    { "message_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.", "user_id": 10, "room_id": 2 },
    { "message_text": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.", "user_id": 8, "room_id": 7 },
    { "message_text": "In congue. Etiam justo. Etiam pretium iaculis justo.", "user_id": 7, "room_id": 4 },
    { "message_text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.", "user_id": 2, "room_id": 1 },
    { "message_text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", "user_id": 1, "room_id": 4 },
    { "message_text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "user_id": 3, "room_id": 2 },
    { "message_text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "user_id": 4, "room_id": 10 },
    { "message_text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "user_id": 10, "room_id": 10 },
    { "message_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.", "user_id": 5, "room_id": 4 },
    { "message_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.", "user_id": 9, "room_id": 4 },
    { "message_text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.", "user_id": 9, "room_id": 2 },
    { "message_text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "user_id": 3, "room_id": 4 },
    { "message_text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "user_id": 5, "room_id": 1 },
    { "message_text": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "user_id": 4, "room_id": 6 },
    { "message_text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.", "user_id": 9, "room_id": 2 },
    { "message_text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", "user_id": 1, "room_id": 6 },
    { "message_text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.", "user_id": 3, "room_id": 10 },
    { "message_text": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "user_id": 8, "room_id": 6 },
    { "message_text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.", "user_id": 8, "room_id": 3 },
    { "message_text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "user_id": 6, "room_id": 2 },
    { "message_text": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "user_id": 2, "room_id": 4 },
    { "message_text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.", "user_id": 4, "room_id": 4 },
    { "message_text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "user_id": 4, "room_id": 4 },
    { "message_text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", "user_id": 4, "room_id": 2 },
    { "message_text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "user_id": 9, "room_id": 4 },
    { "message_text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "user_id": 4, "room_id": 3 },
    { "message_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.", "user_id": 4, "room_id": 8 },
    { "message_text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.", "user_id": 1, "room_id": 5 },
    { "message_text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", "user_id": 6, "room_id": 6 },
    { "message_text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", "user_id": 2, "room_id": 4 },
    { "message_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.", "user_id": 2, "room_id": 9 }
];

const seedMessages = () => Messages.bulkCreate(messageData);

module.exports = seedMessages;