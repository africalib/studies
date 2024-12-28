<script setup>
import applicationService from '@/services/applicationService';
import formService from '@/services/formService';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const state = reactive({
    form: {
        id: 0,
        title: "",
        description: "",
        createDate: "",
    },
    inputs: {
        writerName: "",
        ageRange: 10,
        gender: "M",
        content: ""
    }
})

const writerNameRef = ref();
const router = useRouter();

const submit = async () => {
    if (!state.inputs.writerName.trim()) {
        window.alert("작성자명을 입력해주세요.");
        writerNameRef.value.focus();
        return;
    }

    const output = await applicationService.save(state.inputs);

    if (output) {
        window.alert("신청서 제출을 완료했습니다.")
        router.push("/");
        return;
    }

    window.alert("오류가 있습니다.");
}

const route = useRoute();

(async () => {
    const id = route.params.id;
    state.form = await formService.read(id);
})()
</script>

<template>
    <div class="application">
        <div class="top">
            <span class="title">{{ state.form.title }}</span>
            <span class="desc"> : {{ state.form.description }}</span>
        </div>
        <form @submit.prevent="submit">
            <div class="mb-4">
                <label for="writerName" class="form-label">작성자명</label>
                <input type="text" ref="writerNameRef" class="form-control" id="writerName" v-model="state.inputs.writerName">
            </div>
            <div class="mb-4">
                <label for="ageRange" class="form-label">연령대</label>
                <select id="ageRange" class="form-select" aria-label="연령대" v-model="state.inputs.ageRange">
                    <option :value="10">10대</option>
                    <option :value="20">20대</option>
                    <option :value="30">30대</option>
                    <option :value="40">40대</option>
                    <option :value="50">50대</option>
                    <option :value="60">60대</option>
                    <option :value="70">70대</option>
                    <option :value="80">80대</option>
                    <option :value="90">90대</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="form-label">성별</label>
                <div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="genderMale" value="M"
                            v-model="state.inputs.gender">
                        <label class="form-check-label" for="genderMale">남</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="genderFemale" value="F"
                            v-model="state.inputs.gender">
                        <label class="form-check-label" for="genderFemale">여</label>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label class="form-label">내용</label>
                <textarea class="form-control" v-model=state.inputs.content></textarea>
            </div>
            <button class="btn btn-primary w-100 p-3" type="submit">제출</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.application {
    .top {
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ddd;
        ;

        .title {
            font-weight: 600;
        }
    }
}
</style>