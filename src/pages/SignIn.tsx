import { Checkbox } from '@radix-ui/react-checkbox';
import { Envelope, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import Logo from '../Logo';

export function SignIn() {

    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center text-gray-100">
      
      <header className="flex flex-col items-center mt-52">
        <Logo />

        <Heading size="lg">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>

      <form action="#" className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <div>
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id="email" name="email" placeholder='Digite seu e-mail' />
            </TextInput.Root>
          </label>
        </div>

        <div>
          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold">Digite sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id="password" name="password" type="password" placeholder='********' />
            </TextInput.Root>
          </label>
        </div>

        <div>
          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember" name="remember"/>
            <Text size="sm" className="text-gray-200 cursor-pointer">Lembrar de mim por 30 dias</Text>
          </label>
        </div>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>

        <Text asChild size="sm" className="mt-4">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
    )
}