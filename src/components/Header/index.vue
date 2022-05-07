<template>
    <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p v-if="!userName">
                            <span>请</span>
                            <!-- <a href="###">登录</a> -->
                            <router-link to="/login">登录</router-link>
                            <!-- <a href="###" class="register">免费注册</a> -->
                            <router-link class="register" to="/register">免费注册</router-link>
                        </p>
                        <!-- 登录了 -->
                        <p v-else>
                            <a>{{userName}}</a>
                            <a class="register" @click="logout">退出登录</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/home">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keywords"/>
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name:"HeaderModule",
    methods:{
        goSearch(){
            // 第一种：字符串形式
            // this.$router.push("/search/"+this.keywords+"?k="+this.keywords.toUpperCase());
            // 第二种：模板字符串形式
            // this.$router.push(`/search/${this.keywords}?k=${this.keywords.toUpperCase()}`)
            // 第三种：对象写法
            if(this.$route.query){
                let location ={name:"search",params:{keywords:this.keywords}}
                location.query = this.$route.query
                this.$router.push(location);
                // console.log(this.$route);
                // console.log(location);
            }
            
            // ,query:{k:this.keywords.toUpperCase()}

            
            // 面试题1：如何路由传递参数(对象写法)path是否可以结合params参数一起使用？ 答：不可以 params只能结合name使用
            // 面试题2：如何指定params参数可传可不传：在配置路由时在路径的占位符后加一个 ？ 
            // this.$router.push({name:"search",query:{k:this.keywords.toUpperCase()}})
            // 面试题3：params参数可传可不传，但如果传递过来的是空串，如何解决？
            // 使用undefined解决：params参数可以传递，不传递（空的字符串）
            // this.$router.push({name:"search",params:{keywords:''||undefined},query:{k:this.keywords.toUpperCase()}})
            // 面试题4：路由组件能否传递props数据？
            // 可以：三种写法
            
        },
        async logout(){
            // 1.需要发请求，通知服务器退出登录【清除一些数据：token】
            // 2.清除项目当中的数据【userInfo,token】
            try {
                // 如果退出成功
                await this.$store.dispatch('userLogout');
                // 返回首页
                this.$router.push('/home');
            } catch (error) {
                alert(error.message);
            }
        }
    },
    data(){
        return{
            keywords:''
        }
    },
    computed:{
        // 用户名信息
        userName(){
            return this.$store.state.user.userInfo.name;
        }
    },
    mounted(){
        this.$bus.$on("clear",()=>{
            this.keywords="";
        })
    }
}
</script>

<style lang="less" scoped>
    .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>