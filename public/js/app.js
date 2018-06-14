'use strict';

new Vue({
    el: '#app',
    data: {
        gender: 5,
        age: 0,
        height: 0,
        weight: 0,
        activity: 1.2,
        goals: 'maintain',
        macros: {
            carbs: 35,
            proteins: 50,
            fats: 15,
        }
    },
    computed: {
        bmi() {
            return (this.weight / Math.pow(this.height / 100, 2) || 0).toFixed(1)
        },
        bmr() {
            return Math.ceil((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + this.gender)
        },
        tdee() {
            let tdee = parseInt(this.bmr * this.activity);

            return {
                lose: parseInt(tdee - (tdee * 0.15)),
                maintain: tdee,
                gain: parseInt(tdee * 1.05)
            }
        },
        carbs() {
            return Math.ceil((this.tdee[this.goals] * this.macros.carbs / 100) / 4)
        },
        proteins() {
            return Math.ceil((this.tdee[this.goals] * this.macros.proteins / 100) / 4)
        },
        fats() {
            return Math.ceil((this.tdee[this.goals] * this.macros.fats / 100) / 9)
        },
        total() {
            return this.macros.carbs + this.macros.proteins + this.macros.fats
        },
        badge() {
            let status = 'success';

            if (this.total > 100) {
                status = 'danger'
            }

            if (this.total < 100) {
                status = 'warning'
            }

            return `badge badge-${status}`
        }
    }
});

$('[data-toggle="tooltip"]').tooltip()