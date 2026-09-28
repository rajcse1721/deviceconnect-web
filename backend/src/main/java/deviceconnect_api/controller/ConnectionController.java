package deviceconnect_api.controller;

import deviceconnect_api.model.ConnectionRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@RestController
@RequestMapping("/api/connections")
public class ConnectionController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> connect(

            @Valid
            @RequestBody
            ConnectionRequest request
    ){
        Map<String, Object>response = Map.of(
                "Status","REQUEST_RECEIVED",
                "protocal",request.protocol(),
                "host",request.host(),
                "port",request.port(),
                "message","Connection configuration was received successfully"
        );
        return ResponseEntity.ok(response);
    }
}
