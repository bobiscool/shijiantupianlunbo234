/**
 * 这个是为了启动
 */
function doMove(obj,n,dir,attr,target) {

    var aDiv = document.getElementsByClassName('shijian');  //先把div找到,然后 定义一个timer 没过一秒 就会有一个行的AB产生,那么此时
    var oImge1 = aDiv[n].getElementsByTagName('img')[1];
    var oImge2 = aDiv[n].getElementsByTagName('img')[2];//初始化,取值,找好自己的位置
    oImge1.onoff = true;
    oImge2.onoff = false;

    aDiv[n].timer =
        setInterval(
        function (){
        if(){

        }



        }



       ,1000 );








    dir = parseInt(getstyle(obj,attr))<target?dir:-dir;//
    //alert(dir);
    clearInterval(obj.timer);
    obj.timer = setInterval(
        function () {
            var position = parseInt(getstyle(obj, attr)) + dir;//取出当前自己的位置
            //判断自身的位指
            if (position > target&&dir>0 || position <target&&dir<0) {
                //oDiv.style[attr] = position + dir + 'px'; 这种写法,如果在中间过程中调用两个函数就会造成odiv在中间停止不前
                position = target;
            }//满足这两个条件才能在中间场地上驰骋!!!

            obj.style[attr] = position + 'px';


           if (position==0){
                   clearInterval(obj.timer);
                   doMove2(oDiv,1,'top',105);
               }

               setTimeout(
                   function() {

                       doMove(obj, 2, 'left', -128);
                       doMove2(oDiv,1,'top',125);

                   },1000
               );

           }

            /*if(position==-2){


            }*/


            if(position==target){
                obj.n=!obj.n;
                doMove2(oDiv,1,'top',105);
                clearInterval(obj.timer);
                obj.style.left = '128px';

                if (obj.n) {
                    obj.src = obj.img[0];

                }else {
                    obj.src = obj.img[1];
                }
                setTimeout(
                    function() {

                        doMove(obj, 2, 'left', -128);
                        doMove2(oDiv,1,'top',125);

                    },1000
                );

            }

        }, 30);

};
