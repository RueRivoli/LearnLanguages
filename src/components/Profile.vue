<template>
  <div>
      <Header></Header>
      <el-container>
         <el-aside style="background-color:yellow;width:20%;padding:10px;">
            <div style="border: 1px solid black;border-radius: 7px;margin-bottom: 10px;">
                <h2>Languages</h2>
                <div style="margin-top:10px;">
                    <ul>
                        <li>Japonese</li>
                        <li>English</li>
                    </ul>
                </div>
            </div>
             <div style="border: 1px solid black;border-radius: 7px;margin-bottom: 10px;">
                <h2>Friends</h2>
                <div style="margin-top:10px;">
                    <ul>
                        <li>Mary B</li>
                        <li>Takashi</li>
                    </ul>
                </div>
            </div>
            <div style="border: 1px solid black;border-radius: 7px;">
                <h2>Lessons Points</h2>
                <div style="margin-top:10px;">
                    <ul>
                        <li>Japonese: 120</li>
                        <li>English: 70</li>
                    </ul>
                </div>
            </div>
         </el-aside>
        <el-main style="height:60%;background-color:skyblue;">
            <div style="padding:10px;">
                <div style="padding:10px;border-bottom:1px solid black;">
                    <div>
                        <img src="../assets/profile.png" alt="" style="width:50px;height:50px;">
                    </div>
                    <div>
                        Emrata
                    </div>
            </div>
            <el-form ref="form" :model="form" label-width="120px" >
                    <div class="flex_horizontal mar-t-10">
                        <el-form-item label="Username" size="mini">
                            <el-input v-model="form.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="First name" size="mini">
                            <el-input v-model="form.firstName"></el-input>
                        </el-form-item>
                        <el-form-item label="Last name" size="mini">
                            <el-input v-model="form.lastName"></el-input>
                        </el-form-item>
                        <el-form-item label="Birth Date" size="mini">
                        <el-date-picker
                            v-model="form.dateBirth"
                            type="date"
                            placeholder="BirthDate">
                        </el-date-picker>
                        </el-form-item>
                        <el-form-item label="Email" size="mini">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item label="Languages" size="mini">
                            <el-select v-model="form.languages" multiple placeholder="languages">
                                <el-option label="japanese" value="japanese"></el-option>
                                <el-option label="english" value="english"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
            </el-form>
            <div style="padding:10px;">
                <h1>Achievements</h1>
                <div class="flex_horizontal mar-t-5">
                    <div>Finish 10 lessons:</div>
                    <div><img class="achievements" src="../assets/ach_10less.png" alt=""></div>
                    <div><img class="achievements"  src="../assets/ach_10less.png" alt="" ></div>
                    <div><img class="achievements"  src="../assets/ach_10less.png" alt=""></div>
                    <div><img class="achievements"  src="../assets/ach_10less.png" alt=""></div>
                </div>
                <div class="flex_horizontal mar-t-5">
                    <div>Exams:</div>
                    <div><img class="achievements" src="../assets/ach_exam.png" alt=""></div>
                    <div><img class="achievements" src="../assets/ach_exam.png" alt=""></div>
                </div>
                <div class="flex_horizontal mar-t-5">
                    <div>Collaboration:</div>
                    <div><img class="achievements" src="../assets/ach_collab.jpg" alt="" ></div>
                    <div><img class="achievements" src="../assets/ach_collab.jpg" alt=""></div>
                    <div><img class="achievements" src="../assets/ach_collab.jpg" alt=""></div>
                    <div><img class="achievements" src="../assets/ach_collab.jpg" alt="" ></div>
                    <div><img class="achievements" src="../assets/ach_collab.jpg" alt="" ></div>
                </div>
            </div>
            </div>
        </el-main>
      </el-container>
  </div>
</template>

<script>

import Header from '@/components/Header'

export default {
  name: 'Profile',
  components: { Header },
  data () {
    return {
      form: {
        firstName: '',
        userName: '',
        lastName: '',
        dateBirth: '',
        languages: ['japanese', 'english']
      }
    }
  }
}
</script>

<style scoped>

.flex_horizontal{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
}

ul{
    list-style: none;
}

.mar-t-10{
    margin-top: 10px;
}

.mar-t-5{
    margin-top: 5px;
}

.achievements{
    width:40px;
    height:40px;
    margin-right:5px;
}
</style>
