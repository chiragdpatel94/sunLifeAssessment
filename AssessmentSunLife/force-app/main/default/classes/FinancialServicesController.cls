public class FinancialServicesController {
    
    public static List<Account> getAccountList(){
        return [Select Id, Name, OwnerId, Phone, Website, AnnualRevenue from Account Where Industry = 'Financial Services'];
    }

}