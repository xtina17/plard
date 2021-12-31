import img1 from "../../images/products/img1.png"
import img2 from "../../images/products/one.png"
import img3 from "../../images/products/two.png"
import img4 from "../../images/products/three.png"
import img5 from "../../images/products/five.png"
import img6 from "../../images/products/six.png"
import img7 from "../../images/products/seven.png"
import img8 from "../../images/products/eight.png"
import img9 from "../../images/products/nine.png"
import img10 from "../../images/products/four.png"
import {ADD_PRODUCT, GET_PRODUCTS, PRICE} from "../Actions/products.action";
import {ADD_CATEGORY} from "../Actions/categories.action";

const initialState = {
    products: [
        {id: 1 , subCategoryId: 1 ,text: "aaa" , productImg : img1, price : 7000, code:"A777"},
        {id: 2 , subCategoryId: 1 ,text: "aaa" , productImg : img2, price : 4000, code:"A555"},
        {id: 3 , subCategoryId: 1 ,text: "aaa" , productImg : img3, price : 2000, code:"A555"},
        {id: 4 , subCategoryId: 1 ,text: "aaa" , productImg : img4, price : 3000, code:"A555"},
        {id: 5 , subCategoryId: 1 ,text: "aaa" , productImg : img5, price : 8000, code:"A555"},
        {id: 6 , subCategoryId: 1 ,text: "aaa" , productImg : img6, price : 700, code:"A555"},
        {id: 7 , subCategoryId: 1 ,text: "aaa" , productImg : img7, price : 6000, code:"A555"},
        {id: 8 , subCategoryId: 1 ,text: "aaa" , productImg : img8, price : 500, code:"A555"},
        {id: 9 , subCategoryId: 1, text: "aaa" , productImg : img9, price : 900, code:"A555"},
        {id: 10 , subCategoryId: 1 ,text: "aaa" , productImg : img10, price : 750, code:"A555"},


        {id: 11 , subCategoryId: 2 ,text: "bbb" , productImg : img1, price :400, code:"1"},
        {id: 13 , subCategoryId: 2 ,text: "bbb" , productImg : img3, price : 5000, code:"1"},
        {id: 14 , subCategoryId: 2 ,text: "bbb" , productImg : img4, price : 789, code:"A555"},
        {id: 15 , subCategoryId: 2 ,text: "bbb" , productImg : img5, price : 573, code:"A555"},
        {id: 17 , subCategoryId: 2 ,text: "bbb" , productImg : img6, price : 400, code:"A555"},
        {id: 18 , subCategoryId: 2 ,text: "bbb" , productImg : img7, price : 120, code:"47"},
        {id: 19 , subCategoryId: 2 ,text: "bbb" , productImg : img8, price : 7414, code:"A555"},
        {id: 20 , subCategoryId: 2 ,text: "bbb" , productImg : img9, price : 5000, code:"A555"},
        {id: 21 , subCategoryId: 2 ,text: "bbb" , productImg : img10, price : 20000, code:"A555"},

        {id: 22 , subCategoryId: 3 ,text: "ccc" , productImg : img1, price : 20000, code:"444444444"},
        {id: 23 , subCategoryId: 3 ,text: "ccc" , productImg : img2, price : 20000, code:"A555"},
        {id: 24 , subCategoryId: 3 ,text: "ccc" , productImg : img3, price : 20000, code:"A555"},
        {id: 25 , subCategoryId: 3 ,text: "ccc" , productImg : img4, price : 20000, code:"47"},
        {id: 26 , subCategoryId: 3 ,text: "ccc" , productImg : img5, price : 400, code:"A555"},
        {id: 27,  subCategoryId: 3 ,text: "ccc" , productImg : img6, price :50, code:"A555"},
        {id: 28,  subCategoryId: 3 ,text: "ccc" , productImg : img7, price : 500, code:"A555"},
        {id: 29,  subCategoryId: 3 ,text: "ccc" , productImg : img8, price : 500, code:"A555"},
        {id: 30,  subCategoryId: 3 ,text: "ccc" , productImg : img9, price : 5000, code:"A555"},
        {id: 31, subCategoryId: 3 ,text: "ccc" , productImg : img10, price : 556, code:"zzz"},


        {id: 32, subCategoryId: 4 ,text: "ddd" , productImg : img1, price : 700, code:"A555"},
        {id: 33, subCategoryId: 4 ,text: "ddd" , productImg : img2, price : 7222, code:"A555"},
        {id: 34, subCategoryId: 4 ,text: "ddd" , productImg : img3, price : 777, code:"A555"},
        {id: 35, subCategoryId: 4 ,text: "ddd" , productImg : img4, price : 720, code:"A555"},
        {id: 36, subCategoryId: 4 ,text: "ddd" , productImg : img5, price : 700, code:"A555"},
        {id: 37, subCategoryId: 4 ,text: "ddd" , productImg : img6, price : 7000, code:"A555"},
        {id: 38, subCategoryId: 4 ,text: "ddd" , productImg : img7, price :725, code:"A555"},
        {id: 39, subCategoryId: 4 ,text: "ddd" , productImg : img8, price :856, code:"A555"},
        {id: 40, subCategoryId: 4 ,text: "ddd" , productImg : img9, price : 800, code:"A555"},
        {id: 41, subCategoryId: 4 ,text: "ddd" , productImg : img10, price : 4000, code:"A555"},


        {id: 42, subCategoryId: 5 ,text: "eee" , productImg : img1, price : 420, code:"A555"},
        {id: 43, subCategoryId: 5 ,text: "eee" , productImg : img2, price : 4000, code:"A555"},
        {id: 44, subCategoryId: 5 ,text: "eee" , productImg : img3, price : 400, code:"A555"},
        {id: 45, subCategoryId: 5 ,text: "eee" , productImg : img4, price : 753, code:"A555"},
        {id: 46, subCategoryId: 5 ,text: "eee" , productImg : img5, price : 500, code:"A555"},
        {id: 47, subCategoryId: 5 ,text: "eee" , productImg : img6, price : 720, code:"A555"},
        {id: 48, subCategoryId: 5 ,text: "eee" , productImg : img7, price : 750, code:"A555"},
        {id: 49, subCategoryId: 5 ,text: "eee" , productImg : img8, price : 789, code:"A555"},
        {id: 50, subCategoryId: 5 ,text: "eee" , productImg : img9, price : 530, code:"A555"},
        {id: 51, subCategoryId: 5 ,text: "eee" , productImg : img10, price : 537, code:"A555"},

        {id: 52, subCategoryId: 6 ,text: "fff" , productImg : img1, price : 520, code:"A555"},
        {id: 53, subCategoryId: 6 ,text: "fff" , productImg : img2, price : 866, code:"A555"},
        {id: 54, subCategoryId: 6 ,text: "fff" , productImg : img3, price : 520, code:"A555"},
        {id: 55, subCategoryId: 6 ,text: "fff" , productImg : img4, price : 752, code:"A555"},
        {id: 56, subCategoryId: 6 ,text: "fff" , productImg : img5, price : 456, code:"A555"},
        {id: 57, subCategoryId: 6 ,text: "fff" , productImg : img6, price : 500, code:"A555"},
        {id: 58, subCategoryId: 6 ,text: "fff" , productImg : img7, price : 456, code:"A555"},
        {id: 59, subCategoryId: 6 ,text: "fff" , productImg : img8, price : 520, code:"A555"},
        {id: 60, subCategoryId: 6 ,text: "fff" , productImg : img9, price : 520, code:"A555"},
        {id: 61, subCategoryId: 6 ,text: "fff" , productImg : img10, price : 560, code:"A555"},

        {id: 62, subCategoryId: 7 ,text: "ggg" , productImg : img1, price : 560, code:"A555"},
        {id: 63, subCategoryId: 7 ,text: "ggg" , productImg : img2, price : 560, code:"A555"},
        {id: 64, subCategoryId: 7 ,text: "ggg" , productImg : img3, price : 560, code:"A555"},
        {id: 65, subCategoryId: 7 ,text: "ggg" , productImg : img4, price : 560, code:"A555"},
        {id: 66, subCategoryId: 7 ,text: "ggg" , productImg : img5, price : 5600, code:"A555"},
        {id: 67, subCategoryId: 7 ,text: "ggg" , productImg : img6, price : 5600, code:"A555"},
        {id: 68, subCategoryId: 7 ,text: "ggg" , productImg : img7, price : 5600, code:"A555"},
        {id: 69, subCategoryId: 7 ,text: "ggg" , productImg : img8, price : 5600, code:"A555"},
        {id: 70, subCategoryId: 7 ,text: "ggg" , productImg : img9, price : 5600, code:"A555"},
        {id: 71, subCategoryId: 7 ,text: "ggg" , productImg : img10, price : 5600, code:"A555"},

        {id: 72, subCategoryId: 8 ,text: "hhh" , productImg : img1, price : 940, code:"A555"},
        {id: 73, subCategoryId: 8 ,text: "hhh" , productImg : img2, price : 940, code:"A555"},
        {id: 74, subCategoryId: 8 ,text: "hhh" , productImg : img3, price : 940, code:"A555"},
        {id: 75, subCategoryId: 8 ,text: "hhh" , productImg : img4, price : 940, code:"A555"},
        {id: 76, subCategoryId: 8 ,text: "hhh" , productImg : img5, price : 940, code:"A555"},
        {id: 77, subCategoryId: 8 ,text: "hhh" , productImg : img6, price : 940, code:"A555"},
        {id: 78, subCategoryId: 8 ,text: "hhh" , productImg : img7, price : 9460, code:"A555"},
        {id: 79, subCategoryId: 8 ,text: "hhh" , productImg : img8, price : 940, code:"A555"},
        {id: 80, subCategoryId: 8 ,text: "hhh" , productImg : img9, price : 940, code:"A555"},
        {id: 81, subCategoryId: 8 ,text: "hhh" , productImg : img10, price : 9405, code:"A555"},
        //////////////////////////
        {id: 82 , subCategoryId: 9 ,text: "iii" , productImg : img1, price : 8950, code:"A555"},
        {id: 83 , subCategoryId: 9 ,text: "iii" , productImg : img2, price : 862, code:"A555"},
        {id: 84 , subCategoryId: 9 ,text: "iii" , productImg : img3, price : 456, code:"A555"},
        {id: 85 , subCategoryId: 9 ,text: "iii" , productImg : img4, price : 456, code:"A555"},
        {id: 86 , subCategoryId: 9 ,text: "iii" , productImg : img5, price : 456, code:"A555"},
        {id: 87 , subCategoryId: 9 ,text: "iii" , productImg : img6, price : 456, code:"A555"},
        {id: 88, subCategoryId: 9 ,text: "iii" , productImg : img7, price : 52, code:"A555"},
        {id: 89 , subCategoryId: 9 ,text: "iii" , productImg : img8, price : 456, code:"A555"},
        {id: 90 , subCategoryId: 9,text: "iii" , productImg : img9, price : 456, code:"A555"},
        {id: 91 , subCategoryId: 9 ,text: "iii" , productImg : img10, price : 9000, code:"A555"},

        {id: 92 , subCategoryId: 10 ,text: "jjj" , productImg : img1, price : 456, code:"A555"},
        {id: 93 , subCategoryId: 10 ,text: "jjj" , productImg : img2, price : 456, code:"A555"},
        {id: 94 , subCategoryId: 10 ,text: "jjj" , productImg : img3, price : 200, code:"A555"},
        {id: 95 , subCategoryId: 10 ,text: "jjj" , productImg : img4, price : 500, code:"A555"},
        {id: 96 , subCategoryId: 10 ,text: "jjj" , productImg : img5, price : 456, code:"A555"},
        {id: 97 , subCategoryId: 10 ,text: "jjj" , productImg : img6, price : 350, code:"A555"},
        {id: 98 , subCategoryId: 10 ,text: "jjj" , productImg : img7, price : 6000, code:"A555"},
        {id: 99 , subCategoryId: 10 ,text: "jjj" , productImg : img8, price : 400, code:"A555"},
        {id: 100 , subCategoryId: 10 ,text: "jjj" , productImg : img9, price : 750, code:"A555"},
        {id: 101 , subCategoryId: 10 ,text: "jjj" , productImg : img10, price : 600, code:"A555"},

        {id: 102 , subCategoryId: 11 ,text: "jjj" , productImg : img1, price : 7112, code:"A555"},
        {id: 103 , subCategoryId: 11 ,text: "jjj" , productImg : img2, price : 7112, code:"A555"},
        {id: 104 , subCategoryId: 11 ,text: "jjj" , productImg : img3, price : 7112, code:"A555"},
        {id: 105, subCategoryId: 11 ,text: "jjj" , productImg : img4, price : 7112, code:"A555"},
        {id: 106, subCategoryId: 11 ,text: "jjj" , productImg : img5, price : 7112, code:"A555"},
        {id: 107, subCategoryId: 11 ,text: "jjj" , productImg : img6, price :7112, code:"A555"},
        {id: 108, subCategoryId: 11 ,text: "jjj" , productImg : img7, price : 500, code:"A555"},
        {id: 109, subCategoryId: 11 ,text: "jjj" , productImg : img8, price : 500, code:"A555"},
        {id: 110, subCategoryId: 11 ,text: "jjj" , productImg : img9, price : 500, code:"A555"},
        {id: 111, subCategoryId: 11 ,text: "jjj" , productImg : img10, price :500, code:"A555"},

        {id: 112, subCategoryId: 12 ,text: "kkk" , productImg : img10, price : 642, code:"A555"},
        {id: 113, subCategoryId: 12 ,text: "kkk" , productImg : img9, price : 642, code:"A555"},
        {id: 114, subCategoryId: 12 ,text: "kkk" , productImg : img8, price : 642, code:"A555"},
        {id: 115, subCategoryId: 12 ,text: "kkk" , productImg : img7, price : 642, code:"A555"},
        {id: 116, subCategoryId: 12 ,text: "kkk" , productImg : img6, price : 642, code:"A555"},
        {id: 117, subCategoryId: 12 ,text: "kkk" , productImg : img5, price : 642, code:"A555"},
        {id: 118, subCategoryId: 12 ,text: "kkk" , productImg : img4, price : 642, code:"A555"},
        {id: 119, subCategoryId: 12 ,text: "kkk" , productImg : img3, price :642, code:"A555"},
        {id: 120, subCategoryId: 12 ,text: "kkk" , productImg : img2, price : 642, code:"A555"},
        {id: 121, subCategoryId: 12 ,text: "kkk" , productImg : img1, price : 500, code:"A555"},

        {id: 122, subCategoryId: 13 ,text: "lll" , productImg : img10, price : 642, code:"A555"},
        {id: 123, subCategoryId: 13 ,text: "lll" , productImg : img9, price : 642, code:"A555"},
        {id: 124, subCategoryId: 13 ,text: "lll" , productImg : img8, price : 642, code:"A555"},
        {id: 125, subCategoryId: 13 ,text: "lll" , productImg : img7, price : 642, code:"A555"},
        {id: 126, subCategoryId: 13 ,text: "lll" , productImg : img6, price :642, code:"A555"},
        {id: 127, subCategoryId: 13 ,text: "lll" , productImg : img5, price : 642, code:"A555"},
        {id: 128, subCategoryId: 13 ,text: "lll" , productImg : img4, price : 642, code:"A555"},
        {id: 129, subCategoryId: 13 ,text: "lll" , productImg : img3, price : 642, code:"A555"},
        {id: 130, subCategoryId: 13 ,text: "lll" , productImg : img2, price : 642, code:"A555"},
        {id: 131, subCategoryId: 13 ,text: "lll" , productImg : img1, price : 642, code:"A555"},

        {id: 132, subCategoryId: 14 ,text: "mmm" , productImg : img10, price : 543, code:"A555"},
        {id: 133, subCategoryId: 14 ,text: "mmm" , productImg : img9, price : 543, code:"A555"},
        {id: 134, subCategoryId: 14 ,text: "mmm" , productImg : img8, price : 543, code:"A555"},
        {id: 135, subCategoryId: 14 ,text: "mmm" , productImg : img7, price : 543, code:"A555"},
        {id: 136, subCategoryId: 14 ,text: "mmm" , productImg : img6, price : 543, code:"A555"},
        {id: 137, subCategoryId: 14 ,text: "mmm" , productImg : img5, price : 543, code:"A555"},
        {id: 138, subCategoryId: 14 ,text: "mmm" , productImg : img4, price : 543, code:"A555"},
        {id: 139, subCategoryId: 14 ,text: "mmm" , productImg : img3, price : 543, code:"A555"},
        {id: 140, subCategoryId: 14 ,text: "mmm" , productImg : img2, price : 543, code:"A555"},
        {id: 141, subCategoryId: 14 ,text: "mmm" , productImg : img1, price : 543, code:"A555"},

        {id: 142, subCategoryId: 15 ,text: "ooo" , productImg : img10, price : 5468, code:"A555"},
        {id: 143, subCategoryId: 15 ,text: "ooo" , productImg : img9, price : 5468, code:"A555"},
        {id: 144, subCategoryId: 15 ,text: "ooo" , productImg : img8, price : 5468, code:"A555"},
        {id: 145, subCategoryId: 15 ,text: "ooo" , productImg : img7, price : 5468, code:"A555"},
        {id: 146, subCategoryId: 15 ,text: "ooo" , productImg : img6, price : 5468, code:"A555"},
        {id: 147, subCategoryId: 15 ,text: "ooo" , productImg : img5, price :5468, code:"A555"},
        {id: 148, subCategoryId: 15 ,text: "ooo" , productImg : img4, price : 5468, code:"A555"},
        {id: 149, subCategoryId: 15 ,text: "ooo" , productImg : img3, price : 5468, code:"A555"},
        {id: 150, subCategoryId: 15 ,text: "ooo" , productImg : img2, price : 5468, code:"A555"},
        {id: 151, subCategoryId: 15 ,text: "ooo" , productImg : img1, price : 5468, code:"A555"},

        {id: 152, subCategoryId: 16 ,text: "ppp" , productImg : img10, price : 640, code:"A555"},
        {id: 153, subCategoryId: 16 ,text: "ppp" , productImg : img1, price : 640, code:"A555"},
        {id: 154, subCategoryId: 16 ,text: "ppp" , productImg : img5, price :640, code:"A555"},
        {id: 155, subCategoryId: 16 ,text: "ppp" , productImg : img4, price : 640, code:"A555"},
        {id: 156, subCategoryId: 16 ,text: "ppp" , productImg : img6, price : 640, code:"A555"},
        {id: 157, subCategoryId: 16 ,text: "ppp" , productImg : img1, price : 640, code:"A555"},
        {id: 158, subCategoryId: 16 ,text: "ppp" , productImg : img8, price :640, code:"A555"},
        {id: 159, subCategoryId: 16 ,text: "ppp" , productImg : img9, price : 640, code:"A555"},
        {id: 160, subCategoryId: 16 ,text: "ppp" , productImg : img10, price : 640, code:"A555"},
        {id: 162, subCategoryId: 16 ,text: "ppp" , productImg : img1, price : 640, code:"A555"},
        ////////////
        {id: 163 , subCategoryId: 17 ,text: "aaa" , productImg : img1, price :789, code:"A555"},
        {id: 164 , subCategoryId: 17 ,text: "aaa" , productImg : img2, price :789, code:"A555"},
        {id: 165 , subCategoryId: 17 ,text: "aaa" , productImg : img3, price : 789, code:"A555"},
        {id: 166, subCategoryId: 17 ,text: "aaa" , productImg : img4, price : 789, code:"A555"},
        {id: 167, subCategoryId: 17 ,text: "aaa" , productImg : img7, price : 789, code:"A555"},
        {id: 168, subCategoryId: 17 ,text: "aaa" , productImg : img8, price :789, code:"A555"},
        {id: 169, subCategoryId: 17 ,text: "aaa" , productImg : img4, price : 789, code:"A555"},
        {id: 170, subCategoryId: 17 ,text: "aaa" , productImg : img2, price : 789, code:"A555"},
        {id: 171, subCategoryId: 17 ,text: "aaa" , productImg : img6, price : 789, code:"A555"},
        {id: 172, subCategoryId: 17 ,text: "aaa" , productImg : img5, price : 789, code:"A555"},

        {id: 173, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 174, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 175, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 176, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 177, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 178, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 179, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 182, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 181, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},
        {id: 182, subCategoryId: 18 ,text: "bbb" , productImg : img1, price : 643, code:"A555"},

        {id: 183, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 184, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 185, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 186, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 187, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 188, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 189, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 190, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 191, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},
        {id: 192, subCategoryId: 19 ,text: "ccc" , productImg : img1, price : 643, code:"A555"},

        {id: 193, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 194, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 195, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 196, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 197, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 198, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 199, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 200, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 201, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},
        {id: 202, subCategoryId: 20 ,text: "ddd" , productImg : img1, price : 6435, code:"A555"},

        {id: 203, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 204, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 205, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 206, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 207, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 208, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 209, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 210, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 467, code:"A555"},
        {id: 211, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 4677, code:"A555"},
        {id: 212, subCategoryId: 21 ,text: "eee" , productImg : img1, price : 7899, code:"A555"},

        {id: 213, subCategoryId: 22 ,text: "fff" , productImg : img1, price :978, code:"A555"},
        {id: 214, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 795, code:"A555"},
        {id: 215, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 753, code:"A555"},
        {id: 216, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 795, code:"A555"},
        {id: 217, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 795, code:"A555"},
        {id: 218, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 795, code:"A555"},
        {id: 219, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 792, code:"A555"},
        {id: 220, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 560, code:"A555"},
        {id: 221, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 790, code:"A555"},
        {id: 222, subCategoryId: 22 ,text: "fff" , productImg : img1, price : 300, code:"A555"},

        {id: 223, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 792, code:"A555"},
        {id: 224, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 590, code:"A555"},
        {id: 225, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 711, code:"A555"},
        {id: 226, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 643, code:"A555"},
        {id: 227, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 795, code:"A555"},
        {id: 228, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 379, code:"A555"},
        {id: 229, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 795, code:"A555"},
        {id: 230, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 590, code:"A555"},
        {id: 231, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 700, code:"A555"},
        {id: 232, subCategoryId: 23 ,text: "ggg" , productImg : img1, price : 350, code:"A555"},

        {id: 233, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 600, code:"A555"},
        {id: 234, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 230, code:"A555"},
        {id: 235, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 645, code:"A555"},
        {id: 236, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price :789, code:"A555"},
        {id: 237, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 5652, code:"A555"},
        {id: 238, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 649, code:"A555"},
        {id: 239, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 543, code:"A555"},
        {id: 240, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 566, code:"A555"},
        {id: 241, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 496, code:"A555"},
        {id: 242, subCategoryId: 24 ,text: "qqqqqq" , productImg : img1, price : 8787, code:"A555"},
    ],
    price: []

}
const productsReducer = (state = initialState , action ) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case PRICE:
            return {
                ...state,
                price:action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            }
            default :
            return state
    }
}
export default productsReducer;