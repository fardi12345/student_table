
$(document).ready(function () {


    var id = 0;
    $('#add_data').click(function () {
        adddata()
    },
        function adddata() {

            var tr = $(this).parents().parents();
            var student_value = tr.find('input[name="student_data"]').val().trim();
            if (student_value == '') {
                alert('Zəhmət olmasa Tələbənin Ad və soyadını daxil edin!')
            }
            else {
                id++;
                $('.tbody-one').append(
                    `
                   <tr class="smtd">
                   <th  scope="row">${id}</th>
                      <td class="text-left">${student_value}</td>
                      <td ><a data-toggle="modal" data-target=".bd-example-modal-lg" href="">İmtahan</a></td>
                      <td class="valtd-one"></td>
                      <td class="valtd-two"></td>
                      <td class="valtd-three"></td>
                   </tr>
                   
                `
                )

                $('#student-input').val('')
            }
        })

    var idmodal = 0;
    $("#data_add_modal").click(function () {

        if ($('#modal-input-id').val() == '') {
            alert('Zəhmət olmasa tələbənin qiymətini daxil edin!')
        }
        else {
            idmodal++
            {

                $('.tbody-two').append(
                    `
                   <tr>
                   <th  scope="row">${idmodal}</th>
                      <td class="text-end"> ${$("#selection option:selected").text()}</td>
                      <td class="text-end valtd">${$('#modal-input-id').val()}</td>
                      <td></td>
                   </tr>
                `
                )
            }
        }
    });



    $('.modal-footer .btn-success').click(function () {
        var ary = [];
       var maxary;
       var minary;
       var sum=0;
        $(function () {
            $('.tbody-two tr').each(function (a,b) {
                let value = $('.valtd',b).text();
                ary.push(value);
                sum=sum+parseInt(value);
                console.log(sum)
            });

         maxary=Math.max(...ary);
         minary=Math.min(...ary);
                    $('.tbody-one .smtd .valtd-one').append(
                        `
                        ${minary}
                       
                    `
                    )
                    $('.tbody-one .smtd .valtd-two').append(
                        `
                       ${maxary}
                       
                    `
                    )
                    $('.tbody-one .smtd .valtd-three').append(
                        `
                       ${sum/3}
                       
                    `
                    )
            });
    })

});

