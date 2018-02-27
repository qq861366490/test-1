
var router = new VueRouter({
    routes: [
    	{
    		path: '/', 
    		redirect: '/home'
    	},
        {
            path: '/', 
            component: main,
            redirect: '/home',
            children: [
               
                { path: 'home', component: home },
                
                { path: 'list', component: list },
               
                { path: 'jinpin', component: jinpin },
               
                { path: 'cart', component: cart },
               
                { path: 'wode', component: wode }
            ]
        },
        { 
        	path: '/jinpin2', 
        	component: jinpin2 
        },
        { 
        	path: '/login', 
        	component: login 
        },
       	{ 
       		path: '/register', 
       		component: register
       	},
       	{ 
       		path: '/list/detail', 
       		component: listDetail
       	},
                
        { 
        	path: '/detail', 
        	component: detail
        }
    ]
});
   
      
