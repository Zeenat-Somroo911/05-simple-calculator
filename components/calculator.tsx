"use client"; // Enables client-side rendering for this component

import { useState, ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [result, setResult] = useState<string>("");

  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    setNum1(isNaN(value) ? null : value);
  };

  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    setNum2(isNaN(value) ? null : value);
  };

  const calculate = (operation: string): void => {
    if (num1 === null || num2 === null) return;

    let newResult: string;
    switch (operation) {
      case 'add':
        newResult = (num1 + num2).toString();
        break;
      case 'subtract':
        newResult = (num1 - num2).toString();
        break;
      case 'multiply':
        newResult = (num1 * num2).toString();
        break;
      case 'divide':
        newResult = num2 !== 0 ? (num1 / num2).toString() : "Error: Division by zero";
        break;
      default:
        return;
    }
    setResult(newResult);
  };

  const clear = (): void => {
    setNum1(null);
    setNum2(null);
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-500 to-yellow-500">
      <h1 className="mb-4 text-3xl font-bold text-center text-white">
        Created by Zeenat Somroo
      </h1>
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-700">Simple Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                id="num1"
                type="number"
                value={num1 !== null ? num1 : ""}
                onChange={handleNum1Change}
                placeholder="Enter a number"
                className="border border-purple-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                id="num2"
                type="number"
                value={num2 !== null ? num2 : ""}
                onChange={handleNum2Change}
                placeholder="Enter a number"
                className="border border-purple-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="text-2xl font-bold text-purple-700 border border-purple-500 hover:bg-purple-500 hover:text-white"
              onClick={() => calculate('add')}
              disabled={num1 === null || num2 === null}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-purple-700 border border-purple-500 hover:bg-purple-500 hover:text-white"
              onClick={() => calculate('subtract')}
              disabled={num1 === null || num2 === null}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-purple-700 border border-purple-500 hover:bg-purple-500 hover:text-white"
              onClick={() => calculate('multiply')}
              disabled={num1 === null || num2 === null}
            >
              *
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-purple-700 border border-purple-500 hover:bg-purple-500 hover:text-white"
              onClick={() => calculate('divide')}
              disabled={num1 === null || num2 === null}
            >
              /
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="result">Result</Label>
            <Input
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
              className="bg-gray-100 border border-gray-300"
            />
          </div>
          <Button 
            variant="outline" 
            className="w-full text-red-700 border border-red-500 hover:bg-red-500 hover:text-white"
            onClick={clear}
          >
            Clear
          </Button>
        </CardContent>
      </Card>
      {/* Copyright notice */}
      <div className="mt-6 black text-center">
        <p>© Zeenat Somroo</p>
      </div>
    </div>
  );
}
