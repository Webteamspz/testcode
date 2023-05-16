convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('raworganics-test')) {
        convert.$('body').addClass('raworganics-test');
        loadTest();
    }
    function classAllocation(){
        var sectionIndex = 1;
	    convert.$('.shopify-section').each(function(){
	        convert.$(this).addClass('section-'+sectionIndex);
	        sectionIndex++;
	    });
	}
    function loadTest() {
    	classAllocation();
    	var faq = '<div class="accordion-item"><div class="accordion-header" id="collapse-3-heading"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">FAQ\'s <em></em></button></div><div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="collapse-3-heading" style=""><div class="accordion-body"><h4>Hvilket produkt skal jeg vælge?</h4><p>Hos Raw Organics finder du et stort udvalg af forskellige CBD olier, der hver har forskelligt indhold af CBD. Der findes produkter med et lavere indhold af cannabidiol, for eksempel 5%, mens der også findes produkter med et indhold op til 35%. CBD\'en bliver blandet med hampfrø eller MCT-olie. Vores Raw serie er vores special produkter, som indeholder Charlotta og Den Hvide. Disse olier er lavet på unikke sorter og olien er udvundet således at alle de essentielle dele af planten bibeholdes. Hvilket produkt der fungerer godt for dig kan være svært at svare på, vores erfaring siger os at folk reagerer meget forskelligt på vores produkter. Vi anbefaler ofte at man starter med vores Charlotta olie, da det er den olie vi har bedst respons på for begyndere. Hvis du er i tvivl, så ring til os på <a class="phn-no" href="tel:+45 89 88 32 16">+45 89 88 32 16</a></p><div class="divider"></div><h4>Er CBD lovligt?</h4><p>Alle CBD olier fra Raw Organics er lovlige at købe, besidde og bruge, fordi de indeholder mindre end 0,2 % THC. Vi samarbejder med Fundación Canna, et førende analyseinstitut i Madrid for at sikre os at alle vores produkter fuldt ud lovlige.</p><div class="divider"></div><h4>Må jeg køre bil og benytte mig af CBD olie?</h4><p>Ja, du må gerne benytte dig af Raw Organics CBD olie og køre bil, fordi vores olie har et THC-niveau lavere end 0,2%. Det betyder at du ikke vil blive påvirket af olien, og få den sløvende effekt som man kan få ved at bruge THC. Dette er ekstremt vigtigt, både for din egen sikkerhed, men også for dem omkring dig. Dette blev lovligt tilbage i 2018, hvor den nye færdselslov blev vedtaget. Det betyder at du kan bruge olien dagligt, uden at det skal gå ud over din brug af bil.</p></div></div></div>';
        convert.$('.accordion.accordion-flush').append(faq);
    }
});