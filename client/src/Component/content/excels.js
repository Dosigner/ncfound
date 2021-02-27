<script>
        import Excel from 'exceljs'
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile('./data.xlsx').then(function(){});
        var worksheet = workbook.getWorksheet(1);
        const json = JSON.stringify(workbook.model);
        console.log(json);
</script>