<template>
  <div class="limiter container-fluid ">
		<div class="container-login100">
			<div class="wrap-login100 p-t-50 p-b-90">
				<div>
					<span class="login100-form-title p-b-51">
						<h3>Sophia</h3>
					</span>
					
					<div 
						class="wrap-input100 validate-input m-b-16" 
						data-validate = "Incorreto"
						:class="{ 'alert-validate': email.isValid}"
					>
						<input 
							class="input100" 
							type="text" 
							name="username" 
							placeholder="Usuario" 
							autocomplete="off" 
							v-model="email.value"
							@focus="() => this.email.isValid = false"
							data-test-input-email
						>
						<span class="focus-input100"></span>
					</div>
					
					<div 
						class="wrap-input100 validate-input m-b-16" 
						:class="{ 'alert-validate': password.isValid}" 
						data-validate="Incorreto"
					>
						<input 
							class="input100" 
							type="password" 
							placeholder="Senha"
							v-model="password.value"
							@focus="() => this.password.isValid = false"
							data-test-input-password
						>
						<span class="focus-input100"></span>
					</div>
					
					<div class="flex-sb-m w-full p-t-3 p-b-24">
						<div class="contact100-form-checkbox">
							<input 
								class="input-checkbox100" 
								id="ckb1" 
								type="checkbox" 
								name="remember-me"
								data-test-checkbox-remember
							>
						</div>

						<div>
							<a href="#" class="txt1">
								Esqueceu a senha?
							</a>
						</div>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button 
							class="login100-form-btn" 
							@click="() => submit()"
							data-test-button-submit
						>
							Acessar
						</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  props: {},
  created() {
		$cookies.remove('hash');
	},
	methods: {
		isEmail () {
			const isEmail = this.email.value ? 
				this.email.value.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) :
				false;
			
			this.email.isValid = !isEmail;
			return isEmail;
		},
		isPassword () {
			const isPassword = 
				Boolean(this.password.value) && 
				this.password.value.length > 5

			this.password.isValid = !isPassword;
			return isPassword;
		},
		validateUser () {
			const validateEmail = this.email.value !== ""
			const validatePassword = this.isPassword()
			return validateEmail && validatePassword
		},
		async submit() {
			if (this.validateUser()) { 
				const { data: { token } } = await axios.post('/login', {
					name: this.email.value,
					pass: this.password.value,
				});
				console.log(token)
				if (token) {
					this.$cookies.set('hash', token);
					this.$route.push('/dashboard')
				}
			} else {
				console.log(this.email.value, this.password.value)
			}	
		}
	},
	data () {
    return {
			email: {
				value: 'manager',
				isValid: false
			},
			password: {
				value: '24503d6z',
				isValid: false
			}
		}
	}
}
</script>

<style lang="scss">
.limiter {
	width: 100%;
	margin: 0 auto;
	
	&--img {
		width: 190px;
	}
}
</style>
