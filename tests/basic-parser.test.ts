import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const JOBS_CSV_PATH = path.join(__dirname, "../data/jobs.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("commas inside fields", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH);
  
  expect(results).toHaveLength(4);
  expect(results[0]).toEqual(["quote", "name"]);
  expect(results[1]).toEqual(["Hello World", "John"]);
  expect(results[2]).toEqual(["One, Two, Three", "Tom"]);
  expect(results[3]).toEqual([",Strange Quote", "Bob"]);
});

test("remove headers", async () => {
  // We will edit this test in the future when we add a "hasHeader" parameter to parseCSV
  const results = await parseCSV(PEOPLE_CSV_PATH);

  expect(results).toHaveLength(4);
  expect(results[0]).toEqual(["Alice", "23"]);
  expect(results[1]).toEqual(["Bob", "thirty"]);
  expect(results[2]).toEqual(["Charlie", "25"]);
  expect(results[3]).toEqual(["Nim", "22"]);
});

test("trim whitespace", async () => {
  const results = await parseCSV(JOBS_CSV_PATH);

  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "job title"]);
  expect(results[1]).toEqual(["Mike", "Analyst"]);
  expect(results[2]).toEqual(["Joe", "Manager"]);
  expect(results[3]).toEqual(["Timmy", "Accountant"]);
  expect(results[4]).toEqual(["Fred", "Employee"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});
