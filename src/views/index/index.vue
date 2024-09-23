<script>

</script>

<!-- <template>
    <div class="common-layout">
        <el-container class="home-container">
            <el-header>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content ep-bg-purple" />
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content ep-bg-purple-light" />
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content ep-bg-purple" />
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-scrollbar height="400px">
                    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
                </el-scrollbar>
            </el-main>
        </el-container>
    </div>
</template> -->


<template>
    <div class="common-layout">
        <el-container class="home-container">
            <el-header>
                <el-row class="row-bg"  justify="space-around">
                    <el-col :span="12">
                        博客网站
                    </el-col>
                    <el-col :span="4" :offset="8">
                        网站用户
                    </el-col>
                </el-row>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>


<style scoped>

.common-layout {
    height: 100vh;
    background-image: url('./bg.jpg');
}

.home-container {
    height: 100vh;
}

.el-header {
    background-color: #ffffff;
    /* text-align: left; */
    /* text-align: center; */
    /* justify-content: space-between; */
    /* white-space: pre; */
    font-size: 2vw;
    margin-left: 3vw;
    
}

.el-main {
    background-color: #EAEDF1;
    margin: 0 3vw;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>