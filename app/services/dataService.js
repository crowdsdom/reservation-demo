"use strict";

angular.module('myApp.services.dataService', [])
    .service('data', function () {
        /********* Constants **********/
        this.RATE = 400;
        this.RATE_TOOLS = 100;

        this.BASE_HOUR = 3;
        this.ROOM_HOUR = 0.5;
        this.EXTRA_HOUR = 1;

        /********* Calcs ************/
        this.customHours = null;

        this.hours = function () {
            // base hour + rooms
            var hours = this.BASE_HOUR +
                Math.max(0, this.rooms - 1) * this.ROOM_HOUR +
                Math.max(0, this.bathRooms - 1) * this.ROOM_HOUR;

            // extras
            for (var i = 0;i < this.extras.length;i++) {
                var extra = this.extras[i];
                hours += extra.selected ? this.EXTRA_HOUR : 0;
            }

            // squares
            hours += this.squaresSelected.addhr;

            return hours;
        }.bind(this);

        this.subtotal = function () {
            return this.hours() * this.RATE;
        }.bind(this);

        this.total = function () {
            return this.subtotal() + (this.tools==1 ? this.RATE_TOOLS : 0);
        }.bind(this);

        /********* Step 1 *********/
            // 房間數量
        this.rooms = 1;
        this.bathRooms = 1;

        // 加時服務
        this.extras = [
            {
                name: "衣物清洗、曬",
                price: 400,
                img: "http://www.jackercleaning.com/Assets/img/icon1.png",
                selected: false
            },
            {
                name: "窗戶內部清潔",
                price: 400,
                img: "http://www.jackercleaning.com/Assets/img/icon2.png",
                selected: false
            },
            {
                name: "陽台清理",
                price: 400,
                img: "http://www.jackercleaning.com/Assets/img/icon3.png",
                selected: false
            }
        ];

        // 有無寵物
        this.pets = {
            cat: false,
            dog: false,
            others: false
        };

        // 坪數大小
        this.squares = [
            {addhr: 0, val: '0~20'},
            {addhr: 0.5, val: '20~30'},
            {addhr: 1, val: '30~40'},
            {addhr: 1.5, val: '40~50'},
            {addhr: 2, val: '50~60'},
            {addhr: 2.5, val: '60~70'},
            {addhr: 3, val: '70~80'},
            {addhr: 3.5, val: '80~90'},
            {addhr: 4, val: '90~100'},
            {addhr: 4.5, val: '100+'}
        ];
        this.squaresSelected = this.squares[0];

        // 樓中樓
        this.entresol = false;

        // 清潔用品
        this.tools = 1;

        /********* Step 2 *********/
            // 打掃地址
        this.address = {
            postalCode: "111",
            city: "台北市",
            district: {
                '台北市': {
                    '中正區': '100',
                    '大同區': '103',
                    '中山區': '104',
                    '松山區': '105',
                    '大安區': '106',
                    '萬華區': '108',
                    '信義區': '110',
                    '士林區': '111',
                    '北投區': '112',
                    '內湖區': '114',
                    '南港區': '115',
                    '文山區': '116'
                }
            }
        };

        this.name = "Peter Chung";

        this.phone = "0972146598";

        this.email = "touhonoob@gmail.com";
    });