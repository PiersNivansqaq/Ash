var timer = setInterval(move,2000)
			var i=0
			
			function move(){
				i++;  //下标
				same()
				if(i>=5){
					i=0;
					$("#banner ol li").eq(i).css("background","red")
				}
			}
			//当点击小圆点的时候，换成相应图片
			$("#banner ol li").click(function(){
				i=$(this).index();
				same()
			})
			//当鼠标移动的时候侯轮播停止
			$("#banner").hover(function(){
				clearInterval(timer)
			},function(){
				timer=setInterval(move,2000)
			})
			//点击左侧按钮
			$("#left").click(function(){
				i--;
				if(i==-1){
					i=4
				}
				same()
			})
			//点击右侧按钮
			$("#right").click(function(){
				i++;
				if(i==5){
					i=0
				}
				same()
			})
			
			//图片显示隐藏，小点变红
			function same(){
				$("#banner ul li").eq(i).fadeIn(500)
				$("#banner ul li").eq(i).siblings().fadeOut(500)
				//小点变红
				$("#banner ol li").css("background","white")
				$("#banner ol li").eq(i).css("background","red")
			}