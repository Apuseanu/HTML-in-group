var modalparent = document.getElementsByClassName("modal");

        // Get the button that opens the modal

        var modal_btn = document.getElementsByClassName("myBtn");

        // Get the <span> element that closes the modal
        var span_close= document.getElementsByClassName("close");

        // When the user clicks the button, open the modal
        function setDataIndex() {

            for (i = 0; i < modal_btn.length; i++)
            {
                modal_btn[i].setAttribute('data-index', i);
                modalparent[i].setAttribute('data-index', i);
                span_close[i].setAttribute('data-index', i);
            }
        }



        for (i = 0; i < modal_btn.length; i++)
        {
            modal_btn[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.display = "block";
            };

            // When the user clicks on <span> (x), close the modal
            span_close[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.display = "none";
            };

        }

        window.onload = function() {

            setDataIndex();
        };

        window.onclick = function(event) {
            if (event.target === modalparent[event.target.getAttribute('data-index')]) {
                modalparent[event.target.getAttribute('data-index')].style.display = "none";
            }

            // OLD CODE
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
