from django import forms
from .models import Project, ProjectNames, Expenses, Incomes, JobHistory ,CompanyNames, MyCompanyNames, Locations, Terrain_Roof, Banks, Clients, Supplier, Details
   
class ProjectForm(forms.ModelForm):
    ProjectName = forms.CharField(max_length=63)
    ProjectCode = forms.CharField(max_length=63)
    CompanyName = forms.ModelChoiceField(
        queryset=Clients.objects.all(),
        empty_label= "Firma Adını Seçiniz",
    )  
    CompanyUndertakingWork = forms.ModelChoiceField(
        queryset=MyCompanyNames.objects.all(),
        empty_label= "Firma Adını Seçiniz",
    )    
    Location = forms.ModelChoiceField(
        queryset=Locations.objects.all(),
        empty_label= "Konum Seçiniz",
        required=False,
    )    
    Cost_NotIncludingKDV = forms.FloatField(required=False)        
    AC_Power = forms.IntegerField(required=False,)
    DC_Power = forms.IntegerField(required=False,)
    CalculatedCost_NotIncludingKDV = forms.FloatField(required=False,)
    RealizedCost_NotIncludingKDV = forms.FloatField(required=False,)
    Incentive = forms.ChoiceField(
        choices=[(False, 'Hayır'), (True, 'Evet')],
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=False,
    )
    CalculatedProfit_Loss = forms.FloatField(required=False,)
    RealizedProfit_Loss = forms.FloatField(required=False,)
    CalculatedProfitRate = forms.FloatField(required=False,)
    RealizedProfitRate = forms.FloatField(required=False,)
    Terrain_Roof = forms.ModelChoiceField(
        queryset=Terrain_Roof.objects.all(),
        empty_label= "Seç",
        required=False,
    )    
    KDV_Rate = forms.FloatField(required=False, initial=20.0)
    #Situation = forms.CharField(max_length=63, initial="Onay Bekliyor")
    StartDate = forms.DateField(
        label='Tarih Seçiniz', 
        widget=forms.widgets.DateInput(attrs={'type': 'date'}),
        required=False,
    )
    FinishDate = forms.DateField(
        label='Tarih Seçiniz', 
        widget=forms.widgets.DateInput(attrs={'type': 'date'}),
        required=False,
    )

    class Meta:
        model = Project
        fields = ['CompanyName', 'Location', 'AC_Power', 'DC_Power', 'CompanyUndertakingWork',
                'CalculatedCost_NotIncludingKDV', 'RealizedCost_NotIncludingKDV','CalculatedProfit_Loss', 
                'RealizedProfit_Loss', 'CalculatedProfitRate', 'RealizedProfitRate', 'Cost_NotIncludingKDV', 
                'KDV_Rate', 'Terrain_Roof', 'Incentive',
                  'StartDate', 'FinishDate','ProjectName','ProjectCode']
        
    def __init__(self, *args, **kwargs):
        super(ProjectForm, self).__init__(*args, **kwargs)


class ExpensesForm(forms.ModelForm):
    ProjectName_Expenses = forms.ModelChoiceField(
        queryset=ProjectNames.objects.all(),
        label='Project Name',
        empty_label= "Proje Adını Seçiniz",

    )
    CompanyName_Expenses = forms.ModelChoiceField(
        queryset=CompanyNames.objects.all(),
        empty_label= "Firma Adını Seçiniz",
        required=False,
    )    
    CompanyName_FromPaymentMade_Expenses = forms.ModelChoiceField(
        queryset=MyCompanyNames.objects.all(),
        empty_label= "Firma Adını Seçiniz",
        required=False
    )
    CompanyName_Paying_Expenses = forms.ModelChoiceField(
        queryset=Supplier.objects.all(),
        empty_label= "Firma Adını Seçiniz",
        
    )   
    ExpensDetails_Expenses = forms.ModelChoiceField(
        queryset=Details.objects.all(),
    )    
    Amount_Expenses = forms.FloatField(required=False)
    Dollar_Rate_Expenses = forms.FloatField(required=False)
    Bank_Expenses = forms.ModelChoiceField(
        queryset=Banks.objects.all(),
        empty_label= "Banka Seçiniz",
        required=False,
        widget=forms.Select(attrs={'class': 'form-control'})
    )
    Date_Expenses = forms.DateField(
        label='Tarih Seçiniz', 
        widget=forms.widgets.DateInput(attrs={'type': 'date'}),
        required=False,
    )
    class Meta:
        model = Expenses
        fields = ['CompanyName_Expenses','CompanyName_FromPaymentMade_Expenses','CompanyName_Paying_Expenses',
                  'ExpensDetails_Expenses','Amount_Expenses','Dollar_Rate_Expenses','Bank_Expenses','Date_Expenses','ProjectName_Expenses'
                  ]
    def __init__(self, *args, **kwargs):
        super(ExpensesForm, self).__init__(*args, **kwargs)
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Modeldeki ilk değeri almak için:
        first_detail = Details.objects.first()

        # Formun başlangıç değerini belirleme:
        self.fields['ExpensDetails_Expenses'].initial = first_detail.pk if first_detail else None
class JobHistoryForm(forms.ModelForm):
    ProjectName_JobHistory = forms.ModelChoiceField(
        queryset=ProjectNames.objects.all(),
        label='ProjectName',
        empty_label= "Proje Adını Seçiniz",

    )
    #CompanyName = forms.CharField(required=False, max_length=63)
    CompanyName_FromJobMade_JobHistory = forms.ModelChoiceField(
        queryset=MyCompanyNames.objects.all(),
        empty_label="Firma Adını Seçiniz",
        required=False,
        label='CompanyName_FromJobMade'
    )
    CompanyName_Job_JobHistory = forms.ModelChoiceField(
        queryset=Supplier.objects.all(),
        empty_label= "Firma Adını Seçiniz",
    )   
    ExpensDetails_JobHistory = forms.CharField(required=False, max_length=1000)
    Invoice_No_JobHistory = forms.CharField(required=False, max_length=63)
    Amount_JobHistory = forms.FloatField(required=False)
    Dollar_Rate_JobHistory = forms.FloatField(required=False)
    Date_JobHistory = forms.DateField(
        label='Tarih Seçiniz',
        widget=forms.widgets.DateInput(attrs={'type': 'date'}),
        required=False
    )

    class Meta:
        model = JobHistory
        fields = ['ProjectName_JobHistory', 'CompanyName_FromJobMade_JobHistory', 'CompanyName_Job_JobHistory',
                  'ExpensDetails_JobHistory', 'Amount_JobHistory', 'Dollar_Rate_JobHistory', 'Date_JobHistory', 'Invoice_No_JobHistory']

class IncomesForm(forms.ModelForm):
    ProjectName_Incomes = forms.ModelChoiceField(
        queryset=ProjectNames.objects.all(),
        empty_label= "Proje Adını Seçiniz",
        widget=forms.Select(attrs={'class': 'form-control'}),
    )       
    CompanyName_ReceivePayment_Incomes = forms.ModelChoiceField(
        queryset=MyCompanyNames.objects.all(),
        empty_label= "Firma Adını Seçiniz",
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=False
    )
    Amount_Incomes_Incomes = forms.FloatField(required=False)
    Dollar_Rate_Incomes = forms.FloatField(required=False)
    PaymentType_Incomes = forms.ChoiceField(
        choices=[('','Seç'), ('Kredi Kartı', 'Kredi Kartı'), ('EFT', 'EFT'), ('Çek', 'Çek')],
        widget=forms.Select(attrs={'class': 'form-control'}),
        required=False,
    )
    ChekDate_Incomes = forms.DateField(
        required=False,
        widget=forms.SelectDateWidget(attrs={'class': 'form-control'}),
        )
    LastChekDate_Incomes = forms.DateField(
        required=False,
        widget=forms.SelectDateWidget(attrs={'class': 'form-control'}),
        )

    class Meta:
        model = Incomes
        fields = ['ProjectName_Incomes','CompanyName_ReceivePayment_Incomes','Dollar_Rate_Incomes',
                   'Amount_Incomes','PaymentType_Incomes','ChekDate_Incomes', "LastChekDate_Incomes"
                  ]


class ClientsForm(forms.ModelForm):
    CompanyName_Clients = forms.CharField(max_length=63)
    ContactPerson = forms.CharField(max_length=63, required=False)
    PhoneNumber = forms.CharField(max_length=15, required=False)
    Email= forms.CharField(max_length=63, required=False)
    Location = forms.ModelChoiceField(
        queryset=Locations.objects.all(),
        empty_label= "Konum Seçiniz",
        required=False,
    ) 
    class Meta:
        model = Clients 
        fields = '__all__'

class SupplierForm(forms.ModelForm):
    CompanyName_Supplier = forms.CharField(max_length=63)
    ContactPerson = forms.CharField(max_length=63, required=False)
    PhoneNumber = forms.CharField(max_length=15, required=False)
    Email= forms.CharField(max_length=63, required=False)
    Location = forms.ModelChoiceField(
        queryset=Locations.objects.all(),
        empty_label= "Konum Seçiniz",
        required=False,
    )    
    class Meta:
        model = Supplier 
        fields = '__all__'