package exp10;

abstract class BankAccount {

    private int accountNumber;
    private String accountHolderName;
    private double balance;

    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance = balance + amount;
        System.out.println("Amount Deposited: " + amount);
    }

    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    abstract void calculateInterest();
}

class SavingsAccount extends BankAccount {

    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    void calculateInterest() {
        double interest = getBalance() * 0.05;
        System.out.println("Savings Account Interest: " + interest);
    }
}

class CurrentAccount extends BankAccount {

    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    void calculateInterest() {
        double interest = getBalance() * 0.02;
        System.out.println("Current Account Interest: " + interest);
    }
}

public class Exp10 {

    public static void main(String[] args) {

        SavingsAccount s1 = new SavingsAccount(101, "Rahul", 10000);

        System.out.println("------ Savings Account ------");

        s1.deposit(2000);

        s1.displayDetails();

        s1.calculateInterest();

        CurrentAccount c1 = new CurrentAccount(102, "Anita", 17000);

        System.out.println("\n------ Current Account ------");

        c1.deposit(3000);

        c1.displayDetails();

        c1.calculateInterest();
    }
}