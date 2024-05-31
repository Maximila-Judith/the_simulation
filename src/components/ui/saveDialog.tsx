import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from 'react';

export function SaveDialog({ children, forSave }: { children: ReactNode; forSave: (name: string, email: string) => void }) {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]{1,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateName = (name: string) => nameRegex.test(name);
  const validateEmail = (email: string) => emailRegex.test(email);

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNameValue(value);
    setIsNameValid(validateName(value));
  };

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmailValue(value);
    setIsEmailValid(validateEmail(value));
  };

  const onSave = () => {
    if (isNameValid && isEmailValid) {
      forSave(nameValue, emailValue);
    } else {
      alert("Veuillez corriger les erreurs dans le formulaire.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-none">
        <DialogHeader>
          <DialogTitle>Formulaire</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input
              id="name"
              value={nameValue}
              className={`col-span-3 ${!isNameValid ? 'border-red-500' : ''}`}
              onChange={nameChange}
            />
            {!isNameValid && <p className="col-span-4 text-red-500">Nom invalide</p>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={emailValue}
              className={`col-span-3 ${!isEmailValid ? 'border-red-500' : ''}`}
              onChange={emailChange}
            />
            {!isEmailValid && <p className="col-span-4 text-red-500">Email invalide</p>}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSave}>Enrégistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
