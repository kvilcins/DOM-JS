'use strict';

const items = document.querySelectorAll('.items');
const item = document.querySelectorAll('.item');
const itemTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item');

const itemTwo = document.querySelector('.item_two');
const propsItemFour = itemTwo.querySelector('.props__item_four');

const itemSix = document.querySelector('.item_six');
const propsItemTwo = itemSix.querySelectorAll('.props__item_two');


propsItem[2].after(propsItemFour);
propsList[2].after(propsItemTwo[1]);
propsList[2].after(propsItemTwo[0]);

items[0].prepend(item[1]);
item[1].after(item[2]);
item[2].after(item[3]);
itemTitle[3].after(propsList[3]);
itemTitle[2].after(propsList[4]);